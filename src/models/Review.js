// Require Mongoose:
const mongoose = require('mongoose');

// Schema from Mongoose:
const reviewSchema = mongoose.Schema({
    album: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    }],
    // title: String,
    rating: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // Let's change this from an array later
    createdBy: [{
        // This will be automatically updated whenever a User creates a review
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
},
{timestamps: true});

// Review Model:
const Review = mongoose.model("Review", reviewSchema);

// Exports:
module.exports = { Review };