var nodemailer = require('nodemailer');
var express = require('express');	

var database = require('../util/database');

var router = express.Router();

var to = 'durlabh@durlabhsharma.in';
var Email = database.model('Email', {name: String, from: String, subject: String, message: String});

var transporter = nodemailer.createTransport("SMTP",{
    service: "Mailgun",
    auth: {
        user: process.env.MAILGUN_SMTP_LOGIN,
        pass: process.env.MAILGUN_SMTP_PASSWORD
    } 
});

router.post('/send', function(req, res, next){
	var mailOptions={
		name : req.body.name,
		from : req.body.from,
		to : to,
		subject : req.body.subject,
		text : req.body.message
	}
	
	var mail = new Email({name: mailOptions.name, from: mailOptions.from, subject: mailOptions.subject, message: mailOptions.text});
	console.log("Mailer Object : "+mail);
	
	transporter.sendMail(mailOptions, function(error, response) {
		if(error){
            console.log(error);
       		res.end("error");
     	}else{
            console.log("Message sent: " + response.message);
        	res.end("sent");
        }
	}); 
	
	mail.save(function (err, mailObj) {
	  if (err) {
		console.log(err);
	  } else {
		console.log('saved successfully:', mailObj);
	  }
});
});

module.exports=router;