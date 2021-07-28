# n@nd

<sub>Release</sub> | <sub>Site</sub> | <sub>Maintained</sub> | <sub>Deployed</sub> | <sub>Packge</sub> |
--- | --- | --- | --- | --- |
[<b>0.8.521</b>](https://github.com/acktic/acktic.github.io/releases/tag/0.8.521 "0.8.521") | [![Website acktic.github.io](https://img.shields.io/website-up-down-green-red/https/acktic.github.io.svg)](https://acktic.github.io/) | [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/acktic/acktic.github.io/graphs/commit-activity) | ![Heroku](https://pyheroku-badge.herokuapp.com/?app=acktic&style=plastic) | <img src='https://github.com/acktic/acktic.github.io/actions/workflows/node.js.yml/badge.svg'> |

### About

  - <em>A Really Simple Syndicate</em>
  - <em>A Enriched Site Summary</em>
  - [Homepage](https://acktic.github.io "Homepage") Github Pages
  - [Heroku](https://acktic.herokuapp.com "Heroku") Node.js Instance

### Use

  <em>Navigate index.html in your browser locally</em>  
  `node app.js` <em>web server @ localhost:3000</em>  

### Add

  <em>edit</em> `site/js/main/Assets.js`  
  <em>save image</em> `site/images/webp`  
  <em>[convert to webp 100x100](https://redketchup.io/image-resizer)</em>  

### Init

  `index.html/?q=[unique-id]`  
  `index.html/?q=[category]`  
  `index.html/?[hash]`  

### Settings

<em>Located in</em> `site/js/Settings.js` <em> edit everything !</em>

### Optional

<em>presuming `git`, `heroku-cli`, `npm` are installed</em>

<em>deploy your own cors-anywhere on heroku</em>  
`git clone https://github.com/Rob--W/cors-anywhere.git`  
`cd cors-anywhere/`  
`npm install`  
`heroku create`  
`git push heroku master`  

<em>deploy your own nsfw-api on heroku</em>  
`git clone https://github.com/EugenCepoi/nsfw_api`  
`heroku container:login`  
`heroku create YOUR_APP_NAME`  
`heroku container:push web --app YOUR_APP_NAME`  
`heroku container:release web --app YOUR_APP_NAME`  

Want to Contribute?
----

Add some Assets!  
Create Themes!  
Cleanup Code!  
File Issues!  

Copyright Notice
----

<em>Images and information retrieved and or displayed in project   
are not owned by the developers, and are only non - consent</em>

### Notice

  This project makes requests to external resources  
  including a cors-proxy, nsfw api, and any asset(s)

License
----

MIT
