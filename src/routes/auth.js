// -- Auth Routes ---


// -- Requires / setup:
const express = require('express');
const authController = require("../controllers/auth");
const IsLoggedIn = require('../helpers/isLoggedIn');

const router = express.Router();


// -- Routes:

// Home
router.get('/', IsLoggedIn, authController.home_get);

// Landing / Sign In
router.get("/auth/landing", authController.landing_get);
router.post("/auth/landing", authController.auth_landing_post);

// Sign Up
router.get("/auth/signup", authController.signup_get);
router.post("/auth/signup", authController.auth_signup_post);

// Log Out
router.get("/auth/logout", authController.auth_logout_get);


module.exports = router;