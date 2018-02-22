const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const cors         = require('cors');

const app = express();

// DB setup
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/journal-development', {
 keepAlive: true,
 reconnectTries: Number.MAX_VALUE
});

app.use(cors());

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const index = require('./routes/api/journal-entries');
app.use('/', index);

app.all('/*', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

// -- error handlers

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({error: 'not found'});
});

app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500).json({error: 'unexpected'});
  }
});

module.exports = app;
