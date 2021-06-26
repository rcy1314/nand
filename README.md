### About

  - <em>A Really Simple Syndicate</em>
  - <em>A Enriched Site Summary</em>
  - [Homepage](https://acktic.github.io "Homepage") Github Pages
  - [Heroku](https://acktic.herokuapp.com "Heroku") Node.js Instance
  - [Allowed](http://ack.allowed.org "Allowed") <em>[Freedns domain](https://freedns.afraid.org/)</em>

### Use

  <em>Navigate index.html in your browser locally</em><br>
  `node app.js` <em>web server @ localhost:3000</em>

## Init

  `/?q=[unique-id]`<br>
  `/?q=[category]`<br>
  `/?[hash]`<br>

### Settings

<em>Located in</em> `site/js/settings.js` <em> edit everything !</em><br>
-<em>backgroundImage path is overwritten in theme fn</em>

### Optional

<em>presuming `git`, `heroku-cli`, `npm` are installed

<em>deploy your own cors-anywhere on heroku</em><br>
`git clone https://github.com/Rob--W/cors-anywhere.git`<br>
`cd cors-anywhere/`<br>
`npm install`<br>
`heroku create`<br>
`git push heroku master`<br>

<em>deploy your own nsfw-api on heroku</em><br>
`git clone https://github.com/EugenCepoi/nsfw_api`<br>
`heroku container:login`<br>
`heroku create YOUR_APP_NAME`<br>
`heroku container:push web --app YOUR_APP_NAME`<br>
`heroku container:release web --app YOUR_APP_NAME`<br>

Want to Contribute?
----

Add some Assets!<br>
Create Themes!<br>
File Issues!<br>

Copyright Notice
----

<em>Images and information retrieved and or displayed in project<br> are not owned by the developers, and are only non - consent</em>

License
----

MIT
