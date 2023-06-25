const {Review} = require("../models/Review");

// Album model and mongoose for related collections
const { Album } = require('../models/Album');
const { default: mongoose } = require('mongoose');



// Require Moment Lib
const moment = require('moment');

// APIs for Reviews

// http GET - Load Review form
exports.review_create_get = (req, res) => {
    // find list of albums from album collection
    Album.find()
    // once this is done, then render add page along with albums data:
    .then((albums) => {
        res.render("review/add", {albums})
    })
    // else show me the error
    .catch(err => {
        console.error(err);
    })
};

// http post - Review
exports.review_create_post = (req, res) => {

    let review = new Review(req.body);

    review.save()
    .then(() => {
        req.body.album.forEach(album => {
            Album.findById(album, (error, album) => {
                album.review.push(review);
                album.save();
            })
        })
        res.redirect("/review/index")
    })
     .catch((err) => {
         console.error(err);
         res.send("Please try again later!!!");
     })   
};

// http GET - review index API

exports.review_index_get = (req, res) => {
    Review.find().populate('album').populate('createdBy')
    .then(reviews =>{
        res.render("review/index", {reviews: reviews, moment})
    })
    .catch(err => {
        console.error(err);
    })
};

// http GET - review by ID
exports.review_show_get = (req, res) => {
    // find review by id
    Review.findById(req.query.id).populate('album').populate('createdBy') // can call .populate() with other info here
    .then(review => {
        res.render("review/detail", {review, moment})
    })
    .catch(err => {
        console.error(err)
    })
};

// http DELETE - Review
exports.review_delete_get = (req, res) => {
    Review.findByIdAndDelete(req.query.id)
    .then(() => {
        res.redirect("/review/index")
    })
    .catch(err => {
        console.error(err)
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
        console.error(err)
    })
};

// http PUT - article update
exports.review_update_put = (req, res) => {
    Review.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/review/index")
    })
    .catch(err => {
        console.error(err)
    })
}