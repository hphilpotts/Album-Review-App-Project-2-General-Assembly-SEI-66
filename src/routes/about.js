// -- About Routes ---


// -- Requires / setup:
const express = require('express');
const aboutController = require('../controllers/about');

const router = express.Router();


// -- Routes:
router.get('/about', aboutController.about_get);


module.exports = router;