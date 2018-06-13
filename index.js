const express = require('express');
const opn = require('opn');
const mongoose = require ('mongoose');
var parser = require('body-parser');

mongoose.connect('mongodb://root:2101Mana@ds016138.mlab.com:16138/datas', function(err) {
 
  if (err) { throw err; }
  else {
			console.log('Successfully connected to MongoDB')
		}
});

var template = new mongoose.Schema({ 
	film : String,
	author :String,
})

app = express();
app.use(parser());
app.use(parser.urlencoded({extended: false}));
app.use(express.static('public'));

app.post('/add', (req, res) =>{
 console.log('author');
 console.log(req.body.author);
console.log('film');
  console.log(req.body.film);
  res.redirect('/');
});
	app.get('/', (req, res)=> {
		res.type('.html');
		res.sendFile(__dirname + '/public/index.html');
	});

mongoose.connection.close();


app.listen(8080);