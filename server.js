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

// AWS
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('*', async (req,res) => {
    let filename = req.path.slice(1)
  
    try {
      let s3File = await s3.getObject({
        Bucket: process.env.BUCKET,
        Key: filename,
      }).promise()
  
      res.set('Content-type', s3File.ContentType)
      res.send(s3File.Body.toString()).end()
    } catch (error) {
      if (error.code === 'NoSuchKey') {
        console.log(`No such key ${filename}`)
        res.sendStatus(404).end()
      } else {
        console.log(error)
        res.sendStatus(500).end()
      }
    }
  })


// curl -i -XPUT --data '{"k1":"value 1", "k2": "value 2"}' -H 'Content-type: application/json' https://some-app.cyclic.app/myFile.txt
app.put('*', async (req,res) => {
    let filename = req.path.slice(1)
  
    console.log(typeof req.body)
  
    await s3.putObject({
      Body: JSON.stringify(req.body),
      Bucket: process.env.BUCKET,
      Key: filename,
    }).promise()
  
    res.set('Content-type', 'text/plain')
    res.send('ok').end()
  })
  
  // curl -i -XDELETE https://some-app.cyclic.app/myFile.txt
  app.delete('*', async (req,res) => {
    let filename = req.path.slice(1)
  
    await s3.deleteObject({
      Bucket: process.env.BUCKET,
      Key: filename,
    }).promise()
  
    res.set('Content-type', 'text/plain')
    res.send('ok').end()
  })
  
  // Catch all handler for all other request.
  app.use('*', (req,res) => {
    res.sendStatus(404).end()
  })

// Look for static files in public folder:
app.use(express.static("public"));

// Require express-ejs-layouts
    // -> terminal `npm i express-ejs-layouts`
const expressLayouts = require('express-ejs-layouts');

// ROUTE HANDLING BELOW:

// Import routes:
const albumsRouter = require('./routes/albums');
const authRouter = require('./routes/auth');
const reviewsRouter = require('./routes/reviews');


// Look into views:
app.use(expressLayouts);

// Session and passport for auth to go below:
// --
let session = require('express-session');
let passport = require('./helper/ppConfig');

// Init session
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 3600000}
}))

// Init passport and passport session
app.use(passport.initialize());
app.use(passport.session());

//Sharing the user information with all pages
app.use(function(req, res, next){
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

app.listen(PORT, function() {
    console.log(`Hello-Express Application is running on port ${PORT}`);
})


