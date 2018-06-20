const express = require('express');
const opn = require('opn');
const server = require('./server');
const parser = require('body-parser');
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
app = express();

app.use('BDD.js'); //ici je sais pas comment appeler ce que j ai dans BDD

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
  passport.authenticate('auth0', {failureRedirect: '/login' }),
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

	app.get('/',  (req, res)=> {
		res.type('.html');
		res.sendFile(__dirname + '/public/index.html');
	});
app.listen(8080);
