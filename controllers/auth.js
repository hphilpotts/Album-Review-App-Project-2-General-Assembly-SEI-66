// Require User Model
const User = require("../models/User")

// require bcrypt for hashing password
const bcrypt = require('bcrypt');
const salt = 10;
// API FOR ROOT ROUTE

exports.landing_get = (req, res) => { //potentially exports.auth_landing_get
    res.render("auth/landing"); 
}; 

exports.signup_get = (req, res) => { //potentially exports.auth_signup_get
    res.render("auth/signup");
};



//HTTP POST - Signup Route - To post the data into the database

exports.auth_signup_post = (req, res) => { // auth_signup_post ? or does it not matter as long as it is consisten
    let user = new User(req.body);
    console.log(req.body.password);
    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);

    user.password = hash;

    user.save()
    .then(()=>{
        res.redirect("/")
    })
    .catch((err)=>{
        console.log(err)
        res.send("Please try again later")
    })
}