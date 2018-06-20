const express = require('express');
const opn = require('opn');
const mongoose = require ('mongoose');
const parser = require('body-parser');
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
app = express();

mongoose.connect('mongodb://root:2101Mana@ds016138.mlab.com:16138/datas', (err) =>{
  if (err) 
  { 
  	throw err; 
  }
  else 
  {
			console.log('Successfully connected to MongoDB')
	}
});

var strategy = new Auth0Strategy({
   domain:       'your-domain.auth0.com',
   clientID:     'your-client-id',
   clientSecret: 'your-client-secret',
   callbackURL:  '/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);
app.get('/login/google',
  passport.authenticate('auth0', {connection: 'google-oauth2'}), function (req, res) {
  res.redirect("/");
});
app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/login' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/");
  }
);

app.get('/login',
  passport.authenticate('auth0', {}), function (req, res) {
  res.redirect("/");
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
	app.get('/',  (req, res)=> {
		res.type('.html');
		res.sendFile(__dirname + '/public/index.html');
	});
app.listen(8080);
