var express = require('express');
var app = express();

//Routes begin
var index = require('./routes');
var about = require('./routes/about');
var api = require('./routes/api');

app.use('/', index);
app.use('/about', about);
app.use('/api', api);
//Routes end

app.use(express.static(__dirname + '/public'));
app.use('/resources',  express.static(__dirname + '/bower_components'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


//Error Page Routing
app.use(function(request, response, next) {
	var err = new Error('Page Not Found');
	err.status=404;
	next(err);
});

module.exports = app;