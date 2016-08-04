var express = require('express');
var app = express();

//Routes begin
var index = require('./routes');
var about = require('./routes/about');

app.use('/', index);
app.use('/about', about);
//Routes end

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(function(request, response, next) {
	var err = new Error('Page Not Found');
	err.status=404;
	next(err);
});

module.exports = app;