# JQuery RSS Aggregator

  - Easy to include.
  - Easy to use!

> 


### Dependencies

Here's what's used you won't need:

* Github - Hosting the reader!
* Heroku - Hosting the proxy!

### Sourcing

Include an Iframe in your html with the site.

`<iframe class="rss" src="https://acktic.github.io/"></iframe>`

### Styling

Here is an css for our iframe...
```sh
body {
        background-image: url(https://ackti.files.wordpress.com/2019/08/1566092117954.jpg);
        background-repeat: no-repeat;
}
.rss     {
        transform: translate(50%,50%);
        position: absolute;
        border: none;
        bottom: 50%;
        height: 80%;
        width: 50%;
        right: 50%;
}
```

### CORS Proxy

Heroku's CORS Proxy
`http://cors-anywhere.herokuapp.com/`

Personal Heroku CORS Proxy instance
`https://salty-refuge-64158.herokuapp.com`

[cors-anywhere](https://github.com/Rob--W/cors-anywhere) is a reverse proxy which adds CORS headers to the request.
[heroku-cli](https://github.com/heroku/cli) Heroku-CLI makes it easy to create apps directly from the terminal.
[npm](https://github.com/npm/cli) the package manager for JavaScript.

```sh
git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere/
npm install
heroku create
git push heroku master
```

### Development

Want to contribute? Great!
- Clone this repo
- Pull this repo
- File an issue

License
----

None
