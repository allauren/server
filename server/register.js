var LocalStrategy   = require('passport-local').Strategy;
var User = require('./modeles');

module.exports = function(passport){

    passport.use('signup', new LocalStrategy({
            passReqToCallback : true         },
        (req, username, password, done) =>{

            findOrCreateUser = function(){
                User.user.findOne({ 'register' :  username }, (err, user) =>{
                    if (err){
                        console.log('Error in SignUp: '+err);
                        return done(err);
                    }
                    if (user) {
                        console.log('User already exists with username: '+username);
                        return done(null, false, req.flash('message','User Already Exists'));
                    } else {
                        var newUser = new User.user();
                        newUser.username = username;
                        newUser.password = password;
                        newUser.save(function(err) {
                            if (err){
                                console.log('Error in Saving user: '+err);  
                                throw err;  
                            }
                            console.log('User Registration succesful');    
                            return done(null, newUser);
                        });
                    }
                });
            };
            process.nextTick(findOrCreateUser);
        })
    );

}