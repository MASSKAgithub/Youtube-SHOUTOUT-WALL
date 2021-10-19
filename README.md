# Youtube-SHOUTOUT-WALL

A simple to use Shoutout Wall for Youtube.

If you want help or report a bug: https://discord.gg/BREsBq6fNQ

## Installation, configuration, hosting & set it on youtube

### Installation


#### Install node.js and all packages

- Install all files of the Youtube Shoutout Wall on your pc.
- Go to https://nodejs.org/ and install the last version for your pc (if you haven't did that before).
- Open cmd and navigate to your script folder with this command: `cd replacebytheserverfolderpath`.
- Run: `npm install` if you did all things ok it will work, for any help come on my discord: https://discord.gg/BREsBq6fNQ.

### Configuration


#### Creating a youtube token

- Create a google api token (youtube api v3) on https://console.developers.google.com/apis/library.
- Go to config.js file and put instead of xxx your token (this is a private key so **NEVER** put it in public).
> the result will be: "Tkau12oijzlhuhn131" (it's not a reall token it's just an example)

#### Configure the config.js

- So in config.js you can set (almost)everything like messages of adding a user or error message,
  also you can choose to log data about added user in a file or in the console.
  
#### Start scripts
 > this part is optional if you don't want don't run it on your pc and go to the **Hosting** part
- For check if everything is ok you need to run it in local first then we will host it on glitch.com
- Navigate to the server folder like in the **Installation** part and run: `node index.js` (it will run index.js where is the main script)
- Open index.html in a browser (it work perfectly on Chrome and Firefox I tested :=D) so here you can see there is the number of channels
  which you have put in config.js you can modify it theyr but don't forget to restart your scripts ! (close cmd and open it again navigate and run like before)
- For add somebody on the wall you must open on a browser: localhost/add?id=hereid you replace *hereid* by the id of the channel which you want to add
  and it will be added on the main part tab (http://localhost/ on your pc).
  
### Hosting

> We will host it on glitch

#### Create an account on glitch

- So the first part is go to https://glitch.com/

#### Install

- Go to glitch then New project > hello-express
- You'll see there is a lot of files delete everything
> Don't forget to put the project private or everyone will have your token.
> I'm not responsable if somebody get your token. (you can also put your token in a global variable)
- Drag and drop every file one by one on glitch (or it will crash) which are in the *server* folder (don't do that for node_modules folder and don't do also for package-lock.json if you have them)

And everything should work !

### Nightbot installation

- So for make it working on youtube we need to use nightbot.

#### Configure nightbot

- Go to http://nightbot.tv/ and create an account with your google account on which is your youtube channel.
- Then there is a menu on the left of your screen go to Commands > Custom  and Add a new command the command name will be !wall or something like that put what you want.
- Now we need to add a message which nightbot will send when the command will be detected, nightbot will go to our link and it will be automatically add the user id on the wall.
- The command is: `$(urlfetch yourGlitchShareUrl/add?id=$(userid))` You need to replace yourGlitchShareUrl by your glitch project url without `/` at the end, it will be like: `$(urlfetch https://myprojectname.glitch.me/add?id=$(userid))` (it doesn't work, it's an example)

#### Configure OBS

- Put your project share link in obs where you can see the users and it's done !


And everything will work ! (Put me a star pls I worked hard on this project)

Want a shoutout Wall for Twitch ? I'll make it soon and put on my github page !

Hope you'll enjoy !

Donate me:
http://paypal.me/masska

release v1.0

All scripts are made by MASSKA

Discord: MASSKA#7619

There willn't be new releases, that project is abandonned, but it remains working.
