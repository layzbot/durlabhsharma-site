var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
	
	response.render('pages/index');
	
});

router.get('/angular', function(request, response, next) {
	response.render('pages/angulardemo');
});

function getTweets(fn) {
	
	twitter.get('statuses/user_timeline', function(error, tweets, response) {
	  if(error) throw error;
	  fn(tweets);
	});
}

module.exports=router;