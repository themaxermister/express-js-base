var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routing locations
var indexRouter = require('./routes/index');
var sampleRouter = require('./routes/sample');
var aboutRouter = require('./routes/about');
var educationRouter = require('./routes/education');
var workRouter = require('./routes/work');
var achievementsRouter = require('./routes/achievements');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routing URL
app.use('/', indexRouter);
app.use('/sample', sampleRouter);
app.use('/about', aboutRouter);
app.use('/education', educationRouter);
app.use('/work', workRouter);
app.use('/achievements', achievementsRouter);

// Error Handling
  // Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

  // Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
