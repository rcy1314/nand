<sub>Release</sub> | <sub>Site</sub> | <sub>Size</sub> | <sub>Lines</sub> | <sub>Deployed</sub> | <sub>Package</sub> |
--- | --- | --- | --- | --- | --- |
[<b><em>0.9.8111</em></b>](https://github.com/acktic/nand/releases/tag/0.9.8111 "0.9.8111") | [![Website acktic.github.io/nand](https://img.shields.io/website-up-down-green-red/https/acktic.herokuapp.com.svg)](https://acktic.github.io/nand) | ![Size](https://img.shields.io/github/languages/code-size/acktic/nand?color=%237FCB61&style=plastic) | ![Lines](https://img.shields.io/tokei/lines/github/acktic/nand?color=%2380CD61&style=plastic) | ![Heroku](https://pyheroku-badge.herokuapp.com/?app=acktic&style=plastic) | <img src='https://github.com/acktic/nand/actions/workflows/node.js.yml/badge.svg'> |

### About

  - <em>A Really Simple Syndicate</em>
  - <em>A Enriched Site Summary</em>
  - <em>No Scraping only parsing</em>


### Use

  <em>Navigate index.html in your browser locally</em>  
  `node app.js` <em>web server @ localhost:3000</em>  

### Add

  <em>edit</em> `site/js/main/Assets.js`  
  <em>save image</em> `site/images/webp`  
  <em>[convert to webp 100x100 image](https://redketchup.io/image-resizer)</em>  

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

Notice
----

  This project makes requests to external resources  
  including a cors-proxy, nsfw api, and any asset(s)

Note
----
  <em>If the viewport is unstable when  
  images load turn on cropImages


License
----

MIT
