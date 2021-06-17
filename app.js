var express = require('express');
var app = express();
app.use('/', express.static('/home/ack/acktic.github.io'))
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log('Your files will be served through this web server')
});
