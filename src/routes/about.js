const express= require('express');

const router = express.Router();

const aboutCtrl = require('../controllers/about')

router.get('/about', aboutCtrl.about_get);

module.exports = router;