const mongoose = require ('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const models = require('./modeles')

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

  login : (username, password, done) =>{
 
  }
};