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
var server = require('http').Server(app);
var io = require('socket.io')(server);

//mongoose.connect(config.db);

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), function() {
  console.log('Express and websocket server listening on port ' + app.get('port'));
});

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

io.on('connection', function (socket) {
  console.log('Connection detected');
  socket.emit('connected', 'hahaha');
  socket.on('connect', function (data) {
    console.log('User connected ' + data);
  });
  socket.on('newFundsAdded', function(amount) {
    console.log(amount);
    io.sockets.emit("newFundsAdded", amount);
  });
  socket.on('notify', function() {
    io.sockets.emit('sendNotification', 'If you enjoy this song, please help support Taylor Swift\'s MSF charity by making a donation.');
  });
});
