const express = require('express');

const router = express.Router();

const authCtrl = require("../controllers/auth");

router.get("/", authCtrl.landing_get); // verify whether to use auth_landing_get instead
// router.post("/", authCtrl.landing_post);
router.get("/auth/signup", authCtrl.signup_get); // again verify whether to use auth_signup_get instead
router.post("/auth/signup", authCtrl.auth_signup_post);


module.exports = router;
