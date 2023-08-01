// Require Mongoose:
const mongoose = require('mongoose');

// Schema from Mongoose:
const albumSchema = mongoose.Schema({
    title: String,
    artist: String,
    year: Number,
    trackList: [{
        type: String,
    }],
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    albumCover: String, // string should still work with S3: this will be Object Name
    genre: [{
        type: String
    }],
    createdBy: [{
        // This will be automatically updated whenever a User creates a review
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
},
{timestamps: true});

// Album Model:
const Album = mongoose.model("Album", albumSchema);

// Exports:
module.exports = { Album };