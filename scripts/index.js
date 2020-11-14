const fs = require("fs");
const express = require("express");
const app = express();
const CHANNELS_FILE = "./data/channels.json";
const LOG_FILE = "./data/logs.txt";
const CONFIG_FILE = "../config.js";
var port = 8080;

start(port);

app.get('/add', (req, res) => {
  eval(fs.readFileSync(CONFIG_FILE, 'utf-8')); //load the config.js file in a global variable
  let message = config.addMessage;
  try {
    let user = req.query.id;
    if(user.match(/^[0-9A-Za-z-_]{15,25}$/g)) {
      let channels = JSON.parse(fs.readFileSync(CHANNELS_FILE, 'utf-8'));
      let users = [];
      for(let i = 0; i < channels.length; i++) {
        users[i] = channels[i];
      }
      if(user) {
        if(users.indexOf(user) >= 0) {
          message = config.wasAddedMessage;
        } else {
          users.unshift(user);
          let ecart = users.length - config.channelsNumber;
          if(ecart > 0) {
            for(let i = 1; i <= ecart; i++) {
              users.pop();
            }
          }
          update(users, config);
        }
      }
    } else {
      message = config.wrongUserIdMessage;
    }
  } catch (err) {
    message = config.errorMessage;
  }
  res.send(message);
});
function update(users, config) {
  fs.writeFile(CHANNELS_FILE, JSON.stringify(users), function(err) {
    addLog("user: " + users[0] + " " + config.addMessage + " " + genNewDate(), config);
    if(err) {
        console.log(err);
    }
  });
}
function start(port) {
  eval(fs.readFileSync(CONFIG_FILE, 'utf-8'));
  app.listen(port, () => {
    console.log(`Shoutout is running on http://localhost:${port}`);
  });
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