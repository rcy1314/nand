# RSS-Browser

  - Cross Device Browser.
  - Easy to include.
  - Easy to use.


### Features

* Inline Image Expansion
* Leave off from last feed
* Ten image parsers
* Reverse List
* Predefined xml examples
* Random (in category)
* Toggle Opposite Color Scheme (?uri)
* Youtube Views parsing
* Times Since Post sorted to newest
* Plain text for finding 
* Media Rules for all your devices


### Dependencies

Browser. Here's what's used:

* Github - Hosting the reader.
* Heroku - Hosting the proxy.
* CORS-Anywhere - CORS Headers proxy.

### Menu Array

* Simple Array Structure in rss.js

`{ id : "courtesy", cat : "category", des : "description", uri : "feed", external : "url" },`

### Sourcing

Source the [site](https://acktic.github.io)

### Styling

Default
`https://acktic.github.io`

Opposite
`https://acktic.github.io?op=1`
 
 <p align='center'><img src='https://ackti.files.wordpress.com/2020/01/8197227400950.png'></p>
 
 
### CORS Proxy

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
- Clone this Repo
- Submit a feed
- File an issue

License
----

MIT
