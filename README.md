# Youtube-SHOUTOUT-WALL

A simple to use Shoutout Wall for Youtube.

If you want help or report a bug: https://discord.gg/BREsBq6fNQ

##Installation, configuration and hosting

###Installation

1. Install node.js and all packages

- Install all files of the Youtube Shoutout Wall on your pc.
- Go to https://nodejs.org/ and install the last version for your pc (if you haven't did that before).
- Open cmd and navigate to your script folder with this command: `cd replacebytheserverfolderpath`.
- Run: `npm install` if you did all things ok it will work, for any help come on my discord: https://discord.gg/BREsBq6fNQ.

###Configuration

1. Creating a youtube token

- Create a google api token (youtube api v3) on https://console.developers.google.com/apis/library.
- Go to config.js file and put instead of xxx your token (this is a private key so **NEVER** put it in public).
> the result will be: "Tkau12oijzlhuhn131" (it's not a reall token it's just an example)

2. Configure the config.js

- So in config.js you can set (almost)everything like messages of adding a user or error message,
  also you can choose to log data about added user in a file or in the console.
  
3. Start scripts

- For check if everything is ok you need to run it in local first then we will host it on glitch.com

> It's a simple shoutout wall which is with a back end (server) so you need to host it separatly from your front end scripts.
> All scripts in "server" folder with config.js need to be hosted on glitch or other node app hoster which will run `server.js` there is the main program.

Don't forget to create a youtube api token on: https://console.developers.google.com/apis/library

The other part so: "website scripts" folder with index.html must be hosted on a webhoster like 000webhost.

Also if you want to run it from your pc you need to install modules so need to have node.js and run `npm install` in server folder.

Hope you'll enjoy !

Donate me:
http://paypal.me/masska

If you need some help or want to report a bug come on my discord:
https://discord.gg/BREsBq6fNQ

All scripts are made by MASSKA
Discord: MASSKA#4698
