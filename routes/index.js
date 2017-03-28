var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
	response.render('pages/index');
});

router.get('/angular', function(request, response, next) {
	response.render('pages/angulardemo');
});

module.exports=router;