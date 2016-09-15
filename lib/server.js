var express = require('express');
var webpack = require ('webpack')
var webpackDevServer = require('webpack-dev-server')
var app = express();
app.use(express.static('lib/web'))

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
})

var config = require("../webpack.config.js");
//config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080");
var compiler = webpack(config);
var devserver = new webpackDevServer(compiler);
devserver.listen(8080);