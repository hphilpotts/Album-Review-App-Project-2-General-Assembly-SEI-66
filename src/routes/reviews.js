// -- Review Routes ---


// -- Requires / setup:
const express= require('express');
const methodOverride = require('method-override');
const reviewController = require("../controllers/reviews");
const isLoggedIn = require('../helpers/isLoggedIn');

const router = express.Router();

router.use(methodOverride('_method'));
router.use(express.urlencoded({ extended: true }));


// -- Routes:

// Create Review
router.get("/review/add", isLoggedIn, reviewController.review_create_get);
router.post("/review/add", reviewController.review_create_post);

// Read Review(s)
router.get("/review/index", reviewController.review_index_get);
router.get("/review/detail", reviewController.review_show_get);
router.get("/review/user_index", reviewController.review_by_user_get);

// Update Review
router.get("/review/edit", isLoggedIn,reviewController.review_edit_get);
router.put("/review/update", reviewController.review_update_put);

// Delete Review
router.get("/review/delete", isLoggedIn,reviewController.review_delete_get);


module.exports = router;