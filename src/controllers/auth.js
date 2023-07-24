// Require User Model
const User = require("../models/User")

//require passport configuration
// install dependencies passport and passport-local
let passport = require('../helpers/ppConfig');

// require bcrypt for hashing password
const bcrypt = require('bcrypt');
const salt = 10;


// Route for '/'

exports.home_get = (req, res) => {
    res.redirect("/review/index");
};


// API FOR ROOT ROUTE

exports.landing_get = (req, res) => { //potentially exports.auth_landing_get
    res.render("auth/landing", { message: null }); 
}; 

exports.signup_get = (req, res) => { //potentially exports.auth_signup_get
    res.render("auth/signup", { message: null} );
};



//HTTP POST - Signup Route - To post the data into the database

exports.auth_signup_post = (req, res) => { // auth_signup_post ? or does it not matter as long as it is consisten
    let user = new User(req.body);
    let hash = bcrypt.hashSync(req.body.password, salt);

    user.password = hash;

    user.save()
    .then(() => {
        res.render("auth/landing", { message: "Signed up successfully! Please sign in to begin." })
    })
    .catch((err)=>{
        res.render("auth/signup", { message: "Sign up failed, please try again." })
    })
};


//HTTP POST SIGN IN ROUTE
exports.auth_landing_post = passport.authenticate('local', {
    successRedirect: "/album/index",
    failureRedirect: "/auth/landing",
    failureFlash: "Sign in failed, please check your username and password are correct and try again."
})

// HTTP GET - Logout route 
exports.auth_logout_get = (req, res) => {
    // invalidates the session
    req.logout(function (err) {
        if (err) { return next(err); }
        req.flash("info", "You have been logged out succesfully!")
        res.redirect("/auth/landing");
    })
};