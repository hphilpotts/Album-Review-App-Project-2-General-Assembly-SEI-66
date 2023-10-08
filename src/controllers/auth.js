// --- Auth Controller ---


// Require User Model
const User = require("../models/User");

//require passport configuration
let passport = require('../helpers/ppConfig');

// require bcrypt for hashing password
const bcrypt = require('bcrypt');
const salt = 10;


// HTTP GET - Redirect to Review Index on root:
exports.home_get = (req, res) => {
    res.redirect("/review/index");
}

// HTTP GET - Load Sign Up landing page:
exports.landing_get = (req, res) => {
    res.render("auth/landing", { message: null }); 
}

// HTTP GET - Load Sign Up page:
exports.signup_get = (req, res) => {
    res.render("auth/signup", { message: null} );
}

// HTTP POST - Create new user:
exports.auth_signup_post = async (req, res) =>  {

    let user = new User(req.body);

    const usernameTaken = await User.exists({username: user.username});
    const emailTaken = await User.exists({emailAddress: user.emailAddress});

    if (usernameTaken) {

        req.flash("error", "Username already in use, please choose another");
        res.redirect('/auth/signup');

    } else if (emailTaken) {

        req.flash("error", "Account with this email already exists, please sign in instead");
        res.redirect('/auth/landing');

    } else {

        let hash = bcrypt.hashSync(req.body.password, salt);

        user.password = hash;
    
        user.save()
        .then(() => {
            res.render("auth/landing", { message: "Signed up successfully! Please sign in to begin." });
        })
        .catch(err => {
            console.error(err);
            res.render("auth/signup", { message: "Sign up failed, please try again." });
        })
    }
}


// HTTP POST - Sign in:
exports.auth_landing_post = passport.authenticate('local', {
    successRedirect: "/album/index",
    failureRedirect: "/auth/landing",
    failureFlash: "Sign in failed, please check your username and password are correct and try again."
})

// HTTP GET - Logout: 
exports.auth_logout_get = (req, res) => {
    // invalidates the session
    req.logout(function (err) {
        if (err) { return next(err) }
        req.flash("info", "You have been logged out succesfully!");
        res.redirect("/auth/landing");
    })
}