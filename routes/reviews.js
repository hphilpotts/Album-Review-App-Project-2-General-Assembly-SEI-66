const express= require('express');

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }));

const reviewCtrl = require("../controllers/reviews");

// IsLoggedIn middleware
const IsLoggedIn = require('../helper/isLoggedIn');





// Routes
router.get("/review/add", IsLoggedIn, reviewCtrl.review_create_get);
router.post("/review/add", reviewCtrl.review_create_post);
router.get("/review/index", reviewCtrl.review_index_get);
router.get("/review/detail", IsLoggedIn, reviewCtrl.review_show_get);
router.get("/review/delete", reviewCtrl.review_delete_get);
router.get("/review/edit", reviewCtrl.review_edit_get);
router.put("/review/update", reviewCtrl.review_update_put);

module.exports = router;