// Require Mongoose:
const mongoose = require('mongoose');

// Schema from Mongoose:
const reviewSchema = mongoose.Schema({
    albumName: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album'
    }],
    rating: Number,
    content: String,
    createdBy: [{
        // This will be automatically updated whenever a User creates a review
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{timestamps: true});

// Review Model:
const Review = mongoose.model("Review", reviewSchema);

// Exports:
module.exports = { Review };