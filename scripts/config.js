//All scripts are made by MASSKA
//Discord: MASSKA#4698
//Github: https://github.com/MASSKAgithub/Youtube-SHOUTOUT-WALL

var config = {
    addMessage: "has been successfully added on the wall !", //message when a user is added
    errorMessage: "an error has occured please try again later.", //message when an error occurred
    wasAddedMessage: "this user has been already added on the wall.", 
    wrongUserIdMessage: "a wrong user id has been provided.", //message when a user was already added for avoir duplicated channels on the wall
    logDataInConsole: true, //boolean must be true or false for log added users on the wall in console
    logDataInFile: true, //also a boolean log data in the logs.txt file which is in data folder
    channelsNumber: 5, //the number of channels which can be on the wall
    websiteUrl: "http://localhost", //You must host scripts in the "server" folder on a node app hoster like glitch and put the url of your hosting scripts instead of "http://localhost"
    googleApiToken: "xxx", //Replace xxx by your google api token (youtube api v3) you can find it here: https://console.developers.google.com/apis/library
};

//When you add something replace only! Don't touch other things like if you want to
//change a message, replace text which is in "xxx" so you replace xxx and you DON'T delete the ""
//if in your text there is " then put \ before like that: \" or there will be bugs
//For every help or bug report please come on my discord server: https://discord.gg/BREsBq6fNQ