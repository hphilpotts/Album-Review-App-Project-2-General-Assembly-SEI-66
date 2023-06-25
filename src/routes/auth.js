const express = require('express');

const router = express.Router();

const authCtrl = require("../controllers/auth");

const IsLoggedIn = require('../helper/isLoggedIn');

router.get('/', IsLoggedIn, authCtrl.home_get)
router.get("/auth/landing", authCtrl.landing_get); // verify whether to use auth_landing_get instead
// router.post("/", authCtrl.landing_post);
router.post("/auth/landing", authCtrl.auth_landing_post); // sign in POST route ///double check if / or /landing
router.get("/auth/signup", authCtrl.signup_get); // again verify whether to use auth_signup_get instead
router.post("/auth/signup", authCtrl.auth_signup_post);

router.get("/auth/logout", authCtrl.auth_logout_get);



module.exports = router;
