const express = require('express');

const router = express.Router();

const authCtrl = require("../controllers/auth");

router.get("/", authCtrl.landing_get);

module.exports = router;
