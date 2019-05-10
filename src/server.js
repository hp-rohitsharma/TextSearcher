var fs = require('fs');
var http = require('http');
var express = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');

var path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join('./', 'webapp')));
var upload = multer({ dest: 'uploads/' });

if (!fs.existsSync('repository')){
   fs.mkdirSync('repository');
}
if (!fs.existsSync('index_cache')){
  fs.mkdirSync('index_cache');
}
if (!fs.existsSync('text-files')){
fs.mkdirSync('text-files');
}
if (!fs.existsSync('webapp')){
  fs.mkdirSync('webapp');
}

// For http
var httpServer = http.createServer(app);
httpServer.listen('8080');

require('./routes/index')(app, upload);