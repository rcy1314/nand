# RSS-Browser

  - Cross Device Browser.
  - Easy to include.
  - Easy to use.


### Dependencies

Here's what's used:

* Github - Hosting the reader.
* Heroku - Hosting the proxy.
* CORS-Anywhere - CORS Headers proxy.

### Menu Array

* Simple Array Structure in rss.js

`{ cat : "category", des : "description", uri : "feed", external : "external" },`

### Sourcing

Include an iframe in your html with the [site](https://acktic.github.io).

`<iframe src="https://acktic.github.io"></iframe>`

Specify an Initial category

* News
* Style
* Media
* Sports
* Technology
* World

Default, category Media would look like...

`<iframe src=https://acktic.github.io?opp=0&cat=Media"></iframe>`

This would be for Initially Opposite with category Technology.

`<iframe src="https://acktic.github.io?opp=1&cat=Technology"></iframe>`

### Styling

Double tap icon to invert colors.

### Variables
| Name | Use |
| ------ | ------ |
| opp | Dark = False |
| rss | get pop fallback |
| sel | .cat Selected |
| req | Xhr Data |
| set | Xml Entry/Item |
| ref | Xml Link/Href |
| tap | Touchstart/Click |

### Classes
| Name | Use |
| ------ | ------ |
| .con | Container |
| .tag | .cat Parent |
| .cat | Category |
| .out | Output |
| .get | .xml Wrapper |
| .pop | .sel Wrapper |
| .xml | .out Elements |
| .fav/.inv | Pop(sel) |

### Functions
| Name | Use |
|------|------|
| url | window.open() |
| scr | Scroll element:last |
| pop | .out sel Append |
| xhr | .xml get() |
| app | Previously applyColors() |
| get | Ajax Request |
  

### Cloning

 - Host on [github-pages](https://pages.github.com) or run from your browser locally.

 - Replace https://acktic.github.io/rss.js in index.html's `<script src=>` with the local rss.js for menu editing. 
 
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
