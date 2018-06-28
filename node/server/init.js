var login = require('./login');
var register = require('./register');
var User = require('./modeles');

module.exports = function(passport){
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');
        console.log(user);
        done(null, user._id);
    });
    passport.deserializeUser(function(id, done) {
        User.user.findById(id, function(err, user) {
            console.log('deserializing user:',user);
            done(err, user);
        });
    });
    login(passport);
    register(passport);
}