var mongoose = require('mongoose');

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGODB_URI || 'mongodb://heroku_gm7nrsbq:5t1o96gfle2b62hkk720idnti7@ds019856.mlab.com:19856/heroku_gm7nrsbq';
	
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

module.exports=mongoose;