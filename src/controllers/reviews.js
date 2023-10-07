// --- Review Controller ---


// Require Models:
const {Review} = require("../models/Review");
const { Album } = require('../models/Album');

// Require moment for timestamp formatting:
const moment = require('moment');


// -- CREATE

// HTTP GET - Load New Review Form:
exports.review_create_get = (req, res) => {
    Album.findById(req.query.id)
    .then(Album => {
        res.render("review/add", { Album });
    })
    .catch(err => {
        console.error(err);
        res.status(400).send('Error loading Create Review form. Please try again in a moment!');
    })
}

// HTTP POST - Add new Review:
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
        req.flash("success", "Review added successfully!");
        res.redirect("/review/index");
    })
     .catch(err => {
         console.error(err);
        res.status(400).send('Error creating Review. Please try again in a moment!');
     })   
}


// -- READ

// HTTP GET - Reviews Index:
exports.review_index_get = (req, res) => {
    Review.find().populate('album').populate('createdBy')
    .then(reviews =>{
        res.render("review/index", {reviews: reviews, moment})
    })
    .catch(err => {
        console.error(err);
        res.status(400).send('Error loading Reviews. Please try again in a moment!');
    })
}

// HTTP GET - Review Detail:
exports.review_show_get = (req, res) => {
    Review.findById(req.query.id).populate('album').populate('createdBy') // can call .populate() with other info here
    .then(review => {
        res.render("review/detail", {review, moment});
    })
    .catch(err => {
        console.error(err);
        res.status(400).send('Error loading Review Page. Please try again in a moment!');
    })
}

// HTTP GET - Reviews by User
exports.review_by_user_get = (req, res) => {
    Review.find({ createdBy: req.query.user }).populate('album').populate('createdBy')
    .then(reviews => {
        res.render("review/index", { reviews, moment });
    })
    .catch(err => {
        console.error(err);
        res.status(400).send('Error loading Reviews filtered by user. Please try again in a moment!');
    })
}


// -- UPDATE

// HTTP GET - Load Edit Review Form:
exports.review_edit_get = (req, res) => {
    Review.findById(req.query.id).populate('album')
    .then(review => {
        res.render("review/edit", {review});
    })
    .catch(err => {
        console.error(err);
        res.status(400).send('Error loading Edit Review form. Please try again in a moment!');
    })
}

// HTTP PUT - Update Review:
exports.review_update_put = (req, res) => {
    Review.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        req.flash("success", "Review updated successfully!");
        res.redirect("/review/index");
    })
    .catch(err => {
        console.error(err);
        res.status(400).send('Error updating Review. Please try again in a moment!');
    })
}


// -- DELETE

// HTTP DELETE - Delete Review by ID:
exports.review_delete_get = (req, res) => {
    Review.findByIdAndDelete(req.query.id)
    .then(() => {
        req.flash("info", "Review deleted successfully!");
        res.redirect("/review/index");
    })
    .catch(err => {
        console.error(err);
        res.status(400).send('Error deleting Review. Please try again in a moment!');
    })
}