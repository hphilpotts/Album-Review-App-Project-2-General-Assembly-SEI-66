// SERVER CONFIGURATION

// Require Express:
const express = require('express');

// Require and init dotenv
// -> terminal `npm i dotenv`
require('dotenv').config()

// Require Mongoose:
const mongoose = require('mongoose');

// port config - to be hidden later using .env
const PORT = process.env.PORT;

// Init express:
const app = express();

// Look for static files in public folder:
app.use(express.static("public"));

// Require express-ejs-layouts
// -> terminal `npm i express-ejs-layouts`
const expressLayouts = require('express-ejs-layouts');

// ROUTE HANDLING BELOW:

// Import routes:
const albumsRouter = require('./src/routes/albums');
const authRouter = require('./src/routes/auth');
const reviewsRouter = require('./src/routes/reviews');


// Look into views:
app.use(expressLayouts);

// Session and passport for auth to go below:
// --
let session = require('express-session');
let passport = require('./src/helper/ppConfig');

// Init session
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 3600000 }
}))

// Init passport and passport session
app.use(passport.initialize());
app.use(passport.session());

//Sharing the user information with all pages
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    // res.locals.alerts = req.flash();
    next();
})
// Mount routes:
app.use('/', albumsRouter);
app.use('/', authRouter);
app.use('/', reviewsRouter);

// render pages
app.set('view engine', 'ejs');

// Database connection
mongoose.connect(process.env.MongoDBURL,  // hide later with .env
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('MongoDB connected!');
    }
);

app.listen(PORT, function () {

    if (PORT == undefined) {
        throw new Error('Environment variable `PORT` is undefined.');
    }

    try {
        console.log(`Album Review App is running on: <localhost:${PORT}>`);
    } catch {
        console.error(error);
    }

});


