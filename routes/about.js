var express = require('express');
var router = express.Router();

router.get('/about', function(request, response, next) {
	response.render('pages/demoPage');
});

module.exports=router;