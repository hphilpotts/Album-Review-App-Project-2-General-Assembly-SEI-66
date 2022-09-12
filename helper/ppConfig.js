const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

// require User model
const User = require("../models/User");

//Serialize User
//Save data into sesssion
// Unique identifier
passport.serializeUser(function(user, done){
    done(null, user.id)
});

//Deserialize user 
//Reading the info from database according to id from session
passport.deserializeUser(function(id, done){ // can write id or user
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: "emailAddress",
    passwordField: "password"
},
    function(emailAddress, password, done) {
      User.findOne({ emailAddress: emailAddress }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));




// Export passport middleware
module.exports = passport;