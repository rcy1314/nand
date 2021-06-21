var express = require('express');
var opn = require('open');
var app = express();
app.use('/', express.static(__dirname));
var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
	console.log('Your files will be served through locahost:3000 use your preferred browser')
});
opn('http://localhost:3000/index.html')
