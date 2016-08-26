var nodemailer = require("nodemailer");
var express = require('express');
var router = express.Router();

var transporter = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "sharma.durlabh.93@gmail.com",
        pass: "pxgjleunlherbmmt"
    }
});

var mailOptions={
  /* to : req.query.to,
   subject : req.query.subject,
   text : req.query.text*/

    to : "durlabh@dataflowgroup.com",
   subject : "Node Mail Test",
   text : "Node Test Mail Successful"
}


router.get('/send', function(request, res, next){
	transporter.sendMail(mailOptions, function(error, response) {
		if(error){
            console.log(error);
       		res.end("error");
     	}else{
            console.log("Message sent: " + response.message);
        	res.end("sent");
        }
	});
});

module.exports=router;