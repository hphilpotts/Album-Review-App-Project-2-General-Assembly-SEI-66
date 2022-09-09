// `npm init`

// Require Express:
    // -> terminal `npm install express`
const express = require('express');

// Require Mongoose:
    // -> terminal `npm i mongose`
const mongoose = require('mongoose');

const app = express();

// port config - to be hidden later using .env
const PORT = 4000;

// Database connection
mongoose.connect("mongodb://localhost:27017/blogapp",  // hide later with .env
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('MongoDB connected!');
    }
);

app.listen(PORT, function() {
    console.log(`Hello-Express Application is running on port ${PORT}`);
})


