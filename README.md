# JQuery RSS Aggregator

  - Easy to include.
  - Easy to use!

> 


### Dependencies

Here's what's used you won't need:

* Github - Hosting the reader!
* Heroku - Hosting the proxy!

### Sourcing

Include an Iframe in your html with the hosted site.

`<iframe class="rss" src="https://acktic.github.io/" </iframe>`

### Styling

Here is an example class for our iframe...
```sh
.rss {
        background-color: #EEEEEE;
        position: absolute;
        border: none;
        height: 50%;
        width: 50%;
        right: 0em;
        top: 10em;
     }
```

### CORS Proxy

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
- Pull this repo
- Clone this repo

License
----

None
