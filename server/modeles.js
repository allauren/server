const mongoose = require ('mongoose');

const Schema =  mongoose.Schema;
const template = new Schema({
      username: String,
      password: String,
    });
var film = mongoose.model("film", template);
const templateuser = new Schema({
      username: String,
      password: String,
    });
var users = mongoose.model("register", templateuser);

module.exports ={
	user : users,
	filmtemplate :film
}