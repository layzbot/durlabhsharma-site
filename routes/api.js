var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next){
	response.send("API Home");
});

module.exports=router;