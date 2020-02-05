# RSS-Browser

  - Cross Device Browser.
  - Easy to include.
  - Easy to use.


### Features

* 11 Image Parsers
* Reverse Scroll List
* Plain Text for Find
* 635 XML examples
* Random in Category
* Youtube XML Parsing
* TimeDate Post Sorted
* Former from last feed
* Inline Image Expansion
* Private Proxy Requests
* Color Scheme Opposites
* Media Rules for Devices


### Dependencies

A Browser. Here's what's used:

* Github - Hosting the reader.
* Heroku - Hosting the proxy.
* CORS-Anywhere - CORS Headers proxy.

### Menu Array

* Simple Array Structure in rss.js

`{ id : "courtesy", cat : "category", des : "description", uri : "feed", ext : "url" },`

### Sourcing

Source the [site](https://acktic.github.io) in an iframe.

### Styling

Default
`https://acktic.github.io`

Opposite
`https://acktic.github.io?op=1`
 
 <p align='center'><img src='https://ackti.files.wordpress.com/2020/01/8197227400950.png'></p>
 
 
### CORS Proxy

Modern Browsers Require CORS Headers for Cross Site Requests this is circumvented with a Proxy.

- Heroku's CORS-Anywhere Proxy `http://cors-anywhere.herokuapp.com/`

[cors-anywhere](https://github.com/Rob--W/cors-anywhere) is a reverse proxy which adds CORS headers to the request.

[heroku-cli](https://github.com/heroku/cli) makes it easy to create apps directly from the terminal.

[npm](https://github.com/npm/cli) the package manager for NodeJS.

```sh
git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere/
npm install
heroku create
git push heroku master
```

### Development

Want to contribute? Great!
- Clone this Repository
- Submit a feed
- File an issue

License
----

MIT
