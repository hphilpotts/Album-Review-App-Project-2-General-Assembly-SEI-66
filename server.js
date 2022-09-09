// `npm init`

// Require Express:
    // -> terminal `npm install express`
const express = require('express');

const app = express();

// port config - to be hidden later using .env
const PORT = 4000;

app.listen(PORT, function() {
    console.log(`Hello-Express Application is running on port ${PORT}`);
})


