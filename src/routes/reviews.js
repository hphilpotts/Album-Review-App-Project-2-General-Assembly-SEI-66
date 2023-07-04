const express= require('express');

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }));

const reviewCtrl = require("../controllers/reviews");

// isLoggedIn middleware
const isLoggedIn = require('../helpers/isLoggedIn');

// Routes
router.get("/review/add", isLoggedIn, reviewCtrl.review_create_get);
router.post("/review/add", reviewCtrl.review_create_post);
router.get("/review/index", reviewCtrl.review_index_get);
router.get("/review/detail", isLoggedIn, reviewCtrl.review_show_get);
router.get("/review/user_index", reviewCtrl.review_by_user_get);
router.get("/review/delete", isLoggedIn,reviewCtrl.review_delete_get);
router.get("/review/edit", isLoggedIn,reviewCtrl.review_edit_get);
router.put("/review/update", reviewCtrl.review_update_put);

module.exports = router;