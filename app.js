'use strict';

var express = require('express');
var app = express.createServer();
var port = 3000;

app.get('/', function(req, res) {
	res.send({"msg":"hello world 1"});
});


console.log("Listening at " + port)
app.listen(port);
