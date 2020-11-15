# Youtube-SHOUTOUT-WALL

A simple to use Shoutout Wall for Youtube.

If you want help or report a bug: https://discord.gg/BREsBq6fNQ

## Installation, configuration and hosting

### Installation


1. Install node.js and all packages

- Install all files of the Youtube Shoutout Wall on your pc.
- Go to https://nodejs.org/ and install the last version for your pc (if you haven't did that before).
- Open cmd and navigate to your script folder with this command: `cd replacebytheserverfolderpath`.
- Run: `npm install` if you did all things ok it will work, for any help come on my discord: https://discord.gg/BREsBq6fNQ.

### Configuration


1. Creating a youtube token

- Create a google api token (youtube api v3) on https://console.developers.google.com/apis/library.
- Go to config.js file and put instead of xxx your token (this is a private key so **NEVER** put it in public).
> the result will be: "Tkau12oijzlhuhn131" (it's not a reall token it's just an example)

2. Configure the config.js

- So in config.js you can set (almost)everything like messages of adding a user or error message,
  also you can choose to log data about added user in a file or in the console.
  
3. Start scripts

- For check if everything is ok you need to run it in local first then we will host it on glitch.com
- Navigate to the server folder like in the **Installation** part and run: `node index.js` (it will run index.js where is the main script)
- Open index.html in a browser (it work perfectly on Chrome and Firefox I tested :=D) so here you can see there is the number of channels
  which you have put in config.js you can modify it theyr but don't forget to restart your scripts ! (close cmd and open it again navigate and run like before)
- For add somebody on the wall you must open on a browser: localhost/add?id=hereid you replace *hereid* by the id of the channel which you want to add
  and it will be added on the index.html tab.
  
### Hosting

> We will host it on netlify and glitch because it's ez pez to do it

1. Create an account on glitch and netlify

- So the first part is go to https://glitch.com/ and create an account same with https://www.netlify.com/

2. Install

- Go to glitch then New project > hello-express
- You'll see there is a lot of files delete everything
- Drag and drop every file which is in server folder




Hope you'll enjoy !

Donate me:
http://paypal.me/masska

If you need some help or want to report a bug come on my discord:
https://discord.gg/BREsBq6fNQ

All scripts are made by MASSKA
Discord: MASSKA#4698
