const mongoose = require ('mongoose');

	var Schema =  mongoose.Schema;
	var template = new Schema({ 
			film : String,
			author :String,
		});
		var film = mongoose.model("film", template);

module.exports = {
	func :(req, res) => {
	if (req.body.author || req.body.film)
	{
			if (!req.body.film){
				req.body.film = "to find";
			}
			if (!req.body.author){
				req.body.author = "to find";
			}
		var nfilm = new film({
			film : req.body.film,
			author : req.body.author,
		});
		 nfilm.save( (error) =>{
	     console.log("et hop c est parti");
		 if (error) {
     		console.error(error);
		 	}
		 });
	}
	else{
		console.log('error');
	}
			  res.redirect('/');
	},
};