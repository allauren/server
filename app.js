const express = require('express');
const opn = require('opn');
const server = require('./server/baseDeDonnees.js');
const parser = require('body-parser');
const expressSession = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');


const port = 8080;

mongoose.connect('mongodb://root:2101Mana@ds016138.mlab.com:16138/datas', (err) =>{
  if (err) 
  {throw err;}
  else 
  {console.log('Successfully connected to MongoDB');}
});

app = express();

app.use(parser());
app.use(parser.urlencoded({extended: false}));
app.use(express.static('public'));


app.use(flash());

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
var initPassport = require('./server/init');
initPassport(passport);

var route = require('./routes/index');
route(app, __dirname, passport);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.sendFile(__dirname + '/public/caca.html');

});

console.log ('j ecoute sur le port' + port);
app.listen (port);