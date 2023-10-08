// -- Passport Configuration Helper --

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/User");

//Serialize user object into the session:
passport.serializeUser(function(user, done) {
    done(null, user.id);
})

//Deserialize user object out of session:
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
})

passport.use(new LocalStrategy({
    usernameField: "emailAddress",
    passwordField: "password"
},
    function(emailAddress, password, done) {
      User.findOne({ emailAddress: emailAddress }, function (err, user) {
        if (err) return done(err);
        if (!user) return done(null, false);
        if (!user.verifyPassword(password)) return done(null, false);
        return done(null, user);
      });
    }
  ))

// Export passport middleware
module.exports = passport;