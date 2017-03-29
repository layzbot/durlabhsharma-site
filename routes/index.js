var express = require('express');
var router = express.Router();
var twitter = require('../middleware/twitterUtil');

router.get('/', function(request, response, next) {
	var finalTweets;
	var tweets = getTweets(function(finalTweets) {
		response.render('pages/index', {tweets:finalTweets});
	});	
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