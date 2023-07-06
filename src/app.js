const express = require('express');
const app = express();

app.use(express.static("public")); // look for static files in public folder

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts); // look into views

let session = require('express-session');
let passport = require('./helpers/ppConfig');

const flash = require('connect-flash');

app.use(flash())

require('dotenv').config();

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 3600000 }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.alerts = req.flash();
    next();
})

const aboutRouter = require('./routes/about');
const albumsRouter = require('./routes/albums');
const authRouter = require('./routes/auth');
const reviewsRouter = require('./routes/reviews');
app.use('/', aboutRouter);
app.use('/', albumsRouter);
app.use('/', authRouter);
app.use('/', reviewsRouter);

app.set('view engine', 'ejs');
app.set('views', './src/views'); // views directory needs setting as it is not at root level

const databaseConnection = require('./utils/connect-local-mongodb');
databaseConnection.makeLocalDBConnection();
databaseConnection.checkDBConnectionStatus();

module.exports = { app }