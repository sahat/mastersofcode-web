// Websocket
var server = require('http').createServer();
var url = require('url');
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ server: server });

// Express
var port = 3000;
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var logger = require('morgan');
var async = require('async');
var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var Router = require('react-router');

var config = require('./config');
var routes = require('./app/routes');

var Event = require('./models/event');
var Donation = require('./models/donation');
var User = require('./models/user');

var app = express();

mongoose.connect(config.db);

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    res.send(html);
  });
});

app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({ message: err.message });
});

// WebSocket

wss.on('connection', function connection(ws) {
  var location = url.parse(ws.upgradeReq.url, true);

  ws.on('connect', function incoming(message) {
    console.log('Connection: %s', message);
  });
  ws.send('something');
});

server.on('request', app);
server.listen(port, function () { console.log('Express and Websocket server on ' + server.address().port) });
