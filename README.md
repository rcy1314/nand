# JQuery RSS Aggregator

  - Easy to include!
  - Clone and Go!
  - Easy to use!

> 

### Dependencies

Here's what's used you won't need:

* Github - Hosting the reader!
* Heroku - Hosting the proxy!
* Cors-anywhere - Headers proxy!

### Menu Array

* Simple Array Structure

`{ name : "(unique)", title : "About feed", feed : "xml url", homepage : "referring url" },`

### Sourcing

Include an Iframe in your html with the [site](https://acktic.github.io).

`<iframe class="rss" src="https://acktic.github.io/"></iframe>`

### Styling

![alt text](https://raw.githubusercontent.com/acktic/acktic.github.io/master/3366071279769.png "Example iframe")
![alt text](https://raw.githubusercontent.com/acktic/acktic.github.io/master/8295130659554.png "Example iframe")
![alt text](https://raw.githubusercontent.com/acktic/acktic.github.io/master/0218305377921.png "Example iframe")

Here the some css for our iframe...
```sh
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
Cloning and applyColors

  - light mode uses transparent background and black foreground.
  
`$(".category, .container, .content, button").attr("style", "background-color: transparent; color: #000000;");`

 - dark mode uses black background and white foreground.
 
`$(".category, .container, .content, button").attr("style", "background-color: #000000; color: #FFFFFF;");`

 
### CORS Proxy

- Heroku's CORS Proxy
`http://cors-anywhere.herokuapp.com/`

- Personal Heroku CORS Proxy instance
`https://salty-refuge-64158.herokuapp.com/`

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
- Send a Feed
- File an issue

License
----

None
