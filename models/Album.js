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
    albumCover: String, // check if this is correct data type for image!
    // also, how do we let a user upload this themselves?
    genre: [{
        type: String
    }]
},
{timestamps: true});

// Album Model:
const Album = mongoose.model("Album", albumSchema);

// Exports:
module.exports = { Album };