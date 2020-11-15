const fs = require("fs");
const express = require("express");
const app = express();
const axios = require("axios");
const CHANNELS_FILE = "./channels.json";
const LOG_FILE = "./logs.txt";
const CONFIG_FILE = "./config.js";
var port = 80;

start(port);

app.get("/channels", (req, res) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.set('Content-Type', 'application/json');
  res.json(fs.readFileSync(CHANNELS_FILE, 'utf-8'));
});

app.get('/add', (req, res) => {
  eval(fs.readFileSync(CONFIG_FILE, 'utf-8')); //load the config.js file in a global variable
  let message = config.addMessage;
  try {
    let userId = req.query.id;
    if(userId.match(/^[0-9A-Za-z-_]{15,25}$/g)) {
      let channels = JSON.parse(fs.readFileSync(CHANNELS_FILE, 'utf-8'));
      let users = [];
      for(let i = 0; i < channels.length; i++) {
        users[i] = channels[i];
      }
      if(userId) {
        if(isHere(userId, users)) {
          message = config.wasAddedMessage;
        } else {
          axios.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id="+userId+"&key="+config.googleApiToken).then((res) => {
            let user = {
              id: userId,
              name: res.data.items[0].snippet.title,
              subscribers: res.data.items[0].statistics.subscriberCount,
              logo: res.data.items[0].snippet.thumbnails.default.url,
            }
            users.unshift(user);
            let ecart = users.length - config.channelsNumber;
            if(ecart > 0) {
              for(let i = 1; i <= ecart; i++) {
                users.pop();
              }
            }
            update(users, () => {
              addLog("user: " + user.name + "("+user.id+") " + config.addMessage + " " + genNewDate(), config);
            });
          }).catch((err) => {
            console.log(err);
          });
        }
      }
    } else {
      message = config.wrongUserIdMessage;
    }
  } catch (err) {
    message = config.errorMessage;
    console.log(err);
  }
  res.send(message);
});
function update(users, callback) {
  fs.writeFile(CHANNELS_FILE, JSON.stringify(users), function(err) {
    if(typeof callback === "function") {
      callback()
    }
    if(err) {
        console.log(err);
    }
  });
}
function start(port) {
  eval(fs.readFileSync(CONFIG_FILE, 'utf-8'));
  let channels = JSON.parse(fs.readFileSync(CHANNELS_FILE, 'utf-8'));
  let users = [];
  for(let i = 0; i < channels.length; i++) {
    users[i] = channels[i];
  }
  app.listen(port, () => {
    console.log(`Shoutout is running on http://localhost:${port}`);
  });
  if(users.length < config.channelsNumber) {
    while(users.length !== config.channelsNumber) {
      users.push({});
    }
  } else {
    while(users.length !== config.channelsNumber) {
      users.pop();
    }
  }
  update(users);
  addLog("=== New starting at " + genNewDate(), config);
}
function genNewDate() {
  let currentdate = new Date(); 
  return "(d/m/y) "+currentdate.getDate() + "/"
          + (currentdate.getMonth()+1)  + "/" 
          + currentdate.getFullYear() + " @ "  
          + currentdate.getHours() + ":"  
          + currentdate.getMinutes() + ":" 
          + currentdate.getSeconds();
}
function addLog(message, cfg) {
  if(cfg.logDataInFile) {
    fs.appendFile(LOG_FILE, message + "\n", 'utf-8', function(err) {
      if(err) {
        console.log(err);
      }
    });
  }
  if (cfg.logDataInConsole) {
    console.log(message);
  }
}
function isHere(search, array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i].id == search) {
      return true;
    }
  }
  return false;
}
