// Require Mongoose:
const mongoose = require('mongoose');

// Schema from Mongoose:
const postSchema = mongoose.Schema({
    title: String,
    image: String, // --> check if this datatype needs changing once Ana's instructions have been read
    instruction: [{
        // note: 'difficulty' property will be displayed for each post.
        // However as this is tied to the 'instructions' collection, this can be accesed by Instruction ObjectId
        // - and displayed on post index or post detail this way, rather than being its own Post Model property
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instruction'
    }],
    createdBy: [{
        // This will be automatically updated whenever a User creates a Post
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    addedUsers: [{
        // This will be manually selected by the User creating the Post
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{timestamps: true});

// Post Model:
const Post = mongoose.model("Post", postSchema);

// Exports:
module.exports = { Post };