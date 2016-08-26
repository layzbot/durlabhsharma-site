var nodemailer = require("nodemailer");
var express = require('express');	

var router = express.Router();

//Your sending email address
var from_who = 'sharma.durlabh.93@gmail.com';

var transporter = nodemailer.createTransport("SMTP",{
    service: "Mailgun",
/*	
	//Auth for Google
    auth: {
        user: "sharma.durlabh.93@gmail.com",
        pass: "pxgjleunlherbmmt"
    } */ 
	
	 auth: {
        user: "postmaster@appd4cb8d5cc4c34ae893992007dd15cf85.mailgun.org",
        pass: "9f8b1fcba8bf4d5bbdb749e473c8f57f"
    } 
});

var mailOptions={
  /* to : req.query.to,
   subject : req.query.subject,
   text : req.query.text*/
   from:from_who,
   to : from_who,
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