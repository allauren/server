const express = require('express');
const opn = require('opn');
const server = require('./server/baseDeDonnees.js');

const parser = require('body-parser');

const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const mongoose = require ('mongoose');
var port = 8080;

mongoose.connect('mongodb://root:2101Mana@ds016138.mlab.com:16138/datas', (err) =>{
  if (err) 
  { throw err;}
  else 
  {
  	console.log('Successfully connected to MongoDB')}
});

app = express();
app.use(parser());
app.use(parser.urlencoded({extended: false}));
app.use(express.static('public'));
app.post('/add', (req, res)=>{
	server.func(req, res);
});


app.get('/',  (req, res)=> {
	res.type('.html');
	res.sendFile(__dirname + '/public/index.html');
});

console.log ("j ecoute sur le port " + port);
app.listen(port);
