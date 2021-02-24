var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var routers = require('./routes');
const cors = require('cors');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(bodyParser.json({
  type: 'application/json',
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/build')));

//Routes
app.get('/', function(req, res) {
  res.render(path.join(__dirname, 'index.html'));
});
app.use('/size', routers.Size);
app.use('/edge', routers.Edge);
app.use('/filling', routers.Filling);
app.use('/suggestion', routers.Suggestion);
app.use('/pasta', routers.Pasta);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
