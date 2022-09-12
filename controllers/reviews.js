const {Review} = require("../models/Review");

// Require Moment Lib
const moment = require('moment');

// APIs for Reviews

// http GET - Load Review form
exports.review_create_get = (req, res) => {
    res.render("review/add");
};

// http post - Review
exports.review_create_post = (req, res) => {
    //check to see if post operation works
    console.log(req.body);
    // res.send("Post is working");

    // Saving data to mongodb
    let review = new Review(req.body);

    review.save()
    .then(() => {
        console.log(req.body)
        res.redirect("/album/index")
    })
     .catch((err) => {
         console.log(err);
         res.send("Please try again later!!!");
     })   
};

// http GET - review index API

exports.review_index_get = (req, res) => {
    Review.find()
    .then(reviews =>{
        res.render("review/index", {reviews: reviews, moment})
    })
    .catch(err => {
        console.log(err);
    })
};

// http GET - review by ID
exports.review_show_get = (req, res) => {
    console.log(req.query.id);
    // find review by id
    Review.findById(req.query.id) // can call .populate() with other info here
    .then(review => {
        res.render("review/detail", {review, moment})
    })
    .catch(err => {
        console.log(err)
    })
};

// http DELETE - Review
exports.review_delete_get = (req, res) => {
    console.log(req.query.id);
    Review.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/review/index")
    })
    .catch(err => {
        console.log(err)
    })
}

// Edit API

// http GET - load review edit form 

exports.review_edit_get = (req, res) => {
    Review.findById(req.query.id)
    .then((review) => {
        res.render("review/edit", {review})
    })
    .catch(err => {
        console.log(err)
    })
};

// http PUT - article update
exports.review_update_put = (req, res) => {
    console.log(req.body.id);
    Review.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/review/index")
    })
    .catch(err => {
        console.log(err)
    })
}