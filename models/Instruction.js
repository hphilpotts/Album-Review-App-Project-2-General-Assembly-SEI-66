// Require Mongoose:
const mongoose = require('mongoose');

// Schema from Mongoose:
const postSchema = mongoose.Schema({
    title: String,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    difficulty: Number,
    content: String,
    // list of materials reqired, can be removed if this does not add value/is not needed
    materials: String
},
{timestamps: true});

// Post Model:
const Post = mongoose.model("Post", postSchema);

// Exports:
module.exports = { Post };