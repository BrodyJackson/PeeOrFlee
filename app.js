//much of this is generated automatically my using the express generator package, this is the main entry point to the app
//you can see that the app.use, determines which routing file to use for certain URL's, for example /bathrooms will use the bathroom route file created
//Essentially, we will continue to define routes for the varius things that we need to access
//All the specific queries are placed in the query_models folder, and the routes which direct specific URL's to http requests such as GET,POST,PUT that will then call the queries we define
//Once the frontend is implemented, we will place a call to a specific URL, and these routes will send back an object that can be rendered by the front-end

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cors = require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
var bathroom_routes = require('./routes/bathroom_routes'); 
var rating_routes = require('./routes/rating_routes'); 
var comment_routes = require('./routes/comment_routes'); 
var user_routes = require('./routes/user_routes'); 
var male_routes = require('./routes/male_routes'); 
var female_routes = require('./routes/female_routes'); 


//define app as an express app, we will make it use certain routes ect...
var app = express();


//random stuff created by the express generator 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//These are where we define the routing files for specific URL's
//index and users are not important, just ignore them for now 
app.use('/', index);
app.use('/users', users);
app.use('/bathrooms',bathroom_routes); 
app.use('/ratings', rating_routes);
app.use('/comments', comment_routes); 
app.use('/accounts', user_routes);   //the account url is what accesses the users in the database
app.use('/males', male_routes);
app.use('/females', female_routes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
