var mongoose = require('mongoose');

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGODB_URI;
	
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

module.exports=mongoose;