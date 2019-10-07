var createError = require('http-errors');
var express = require('express');				//* include express
var path = require('path');				
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();							//* Create express app  (No http.createServer in YT/Kantor)

app.set('port', 3001);							//* Changing port (not working 4+)

//* adding Middleware
app.use(function( req, res, next ) {
	if( req.url == '/' ) {
		res.end( "Hello" );
	} else {
		next();									//* pass control to next mw
	}
});
app.use(function( req, res, next ) {
		if( req.url == '/test2') {
		res.end( "Test2" );
	} else {
		next();									//* pass control to next mw
	}
});
app.use(function( req, res, next ) {
		//if( req.url == '/error') {
		if( req.url == '/forbidden') {
		//ERROR();
		//throw new Error("...");
		next( new Error("Woops, denied..." ));
	} else {
		//next();			
		next(err);
	}
});

app.use(function( err, req, res, next ) {
	res.status(500);
	res.send("Something went wrong (TP)");
});

app.use(function( req, res, next ) {
	res.send(404, "Page NotFound, Sorry");
});
app.use(function( req, res, next ) {
	//NODE_ENV = 'production'
	if( app.get('env') == 'development' ) {
		var errorHandler = express.errorHandler();
		errorHandler(err, req, res, next);
	} else {
		res.send(500);		
	}
});



/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
*/
module.exports = app;
