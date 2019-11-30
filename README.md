# RSS-Browser

  - Cross Device Browser.
  - Easy to include.
  - Easy to use.


### Dependencies

None. But here's what's used:

* Github - Hosting the reader.
* Heroku - Hosting the proxy.
* CORS-Anywhere - CORS Headers proxy.

### Menu Array

* Simple Array Structure in rss.js

`{ cat : "category", des : "description", uri : "feed", external : "external" },`

### Sourcing

Include an iframe in your html with the [site](https://acktic.github.io) or view an [example](https://acktic.github.io/example).

`<iframe src="https://acktic.github.io"></iframe>`

Specify an Initial category

* News
* Media
* Social
* Sports
* Technology
* World

Default, category Media would look like...

`<iframe src=https://acktic.github.io?opp=0&cat=Media"></iframe>`

This would be for Initially Opposite with category Technology.

`<iframe src="https://acktic.github.io?opp=1&cat=Technology"></iframe>`

There is also a transparency handler which only accepts one value for Default.

`<iframe src="https://acktic.github.io?opp=0&cat=Media&transparency=1"></iframe>

### Styling

Double tap icon to invert colors.
 
### CORS Proxy

- Heroku's CORS-Anywhere Proxy
`http://cors-anywhere.herokuapp.com/`

[cors-anywhere](https://github.com/Rob--W/cors-anywhere) is a reverse proxy which adds CORS headers to the request.

[heroku-cli](https://github.com/heroku/cli) makes it easy to create apps directly from the terminal.

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
- Clone this Repo
- Submit a Feed
- File an issue

License
----

MIT
