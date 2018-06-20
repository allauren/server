const mongoose = require ('mongoose');

mongoose.connect('mongodb://root:2101Mana@ds016138.mlab.com:16138/datas', (err) =>{
  if (err) 
  { throw err;}
  else 
  {
  	console.log('Successfully connected to MongoDB')}
});
	var Schema =  mongoose.Schema;
	var template = new Schema({ 
			film : String,
			author :String,
		});
		var film = mongoose.model("film", template);
	app.use(parser());
	app.use(parser.urlencoded({extended: false}));
	app.use(express.static('public'));
	app.post('/add', (req, res) => {
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
	});