var LocalStrategy   = require('passport-local').Strategy;
var User = require('./modeles');

module.exports = function(passport){

	passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        (req, username, password, done) =>{ 
            User.user.findOne({ 'username' :  username }, 
                (err, user) =>{
                    if (err)
                        return done(err);
                    if (!user){
                        console.log('User Not Found with username '+username);
                        return done(null, false, req.flash('message', 'User Not found.'));                 
                    }
                    if (user.password != password){
                        console.log('Invalid Password');
                        return done(null, false, req.flash('message', 'Invalid Password')); // redirect back to login page
                    }
                    else 
                    {
                        console.log('valid password');
                    }
                    return done(null, user);
                }
            );

        })
    );
}