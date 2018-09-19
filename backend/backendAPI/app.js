var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);

module.exports = app;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/', function (req, res) {
   res.send('Got a POST request');
 });