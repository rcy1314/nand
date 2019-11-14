# RSS

  - Cross Device Browser.
  - Easy to include.
  - Easy to use.

> 

### Dependencies

Here's what's used you won't need:

* Github - Hosting the reader.
* Heroku - Hosting the proxy.
* CORS-Anywhere - CORS Headers proxy.

### Menu Array

* Simple Array Structure

`{ name : "(unique)", title : "About feed", feed : "xml url", homepage : "referring url" },`

### Sourcing

Include an Iframe in your html with the [site](https://acktic.github.io).

`<iframe class="rss" src="https://acktic.github.io/"></iframe>`

Also accepts variables such as initially Dark with category Technology

`<iframe class="rss" src="https://acktic.github.io/index.html?dark=1&cat=Technology"></iframe>`

This would be for default white with category Local

`<iframe class="rss" src="https://acktic.github.io/index.html?dark=0&cat=Local"></iframe>

Specify an Initial category

* Local
* Entertainment
* Social
* Sports
* Technology
* World

`<iframe class="rss" src="https://acktic.github.io/index.html?dark=1&cat=Technology"></iframe>`

### Styling

![alt text](https://ackti.files.wordpress.com/2019/11/5083752373589.png "Example iframe")
![alt text](https://ackti.files.wordpress.com/2019/11/6235673653326.png "Example iframe")
![alt text](https://ackti.files.wordpress.com/2019/11/6482967896674.png "Example iframe")
![alt-text](https://ackti.files.wordpress.com/2019/11/7864746767418.png "Example iframe")
![alt-text](https://ackti.files.wordpress.com/2019/11/3366071279769.png "Example iframe")

Here is the css for our iframe...
```sh
.rss {
        transform: translate(50%,50%);
        position: absolute;
        border: none;
        bottom: 50%;
        height: 80%;
        width: 50%;
        right: 50%;
}
```
### Variables
| Name | Use |
| ------ | ------ |
| rss | .get() Scrolling-pop() |
| dark | Dark mode(true) |
| sel | .cat selected |

### Classes
| Name | Use |
| ------ | ------ |
| .con | Container |
| .tag | .cat Parent |
| .cat | Category |
| .out | Output |
| .pop | .sel Populate |
| .api | .sel xhr |
| .ext | External Link |
| .xml | .out Elements |
| .bar | Scroll Buffer |
| .bot | Bottom |
| .get | XML Output |
| .api | Titles + Notifications |

### Functions
| Name | Use |
|------|------|
| load | Category and Set Focus |
| bind | Scroll Top and pop() |
| url | window.open() |
| scr | Scroll element:last |
| pop | sel Append |
| xhr | .api Click |
| ran | Random |
| app | Previously applyColors() |
| get | Fetch XML |
  

### Cloning and app()

 - Replace https://acktic.github.io/rss.js in `<script src=>` with the local file for menu editing. 

 - Default app mode uses transparent background and black foreground.
  
`$("body, .con, .cat, .xml").attr("style", "background-color: transparent; color: #000000;");`

 - Dark mode uses black background and white foreground.
 
`$("body, .con, .cat, .xml").attr("style", "background-color: #000000; color: #FFFFFF;");`

 
### CORS Proxy

- Heroku's CORS Proxy
`http://cors-anywhere.herokuapp.com/`

- Personal Heroku CORS-Anywhere Instance
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
- Submit a Feed
- File an issue

License
----

MIT
