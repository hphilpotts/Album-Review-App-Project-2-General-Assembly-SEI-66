// Require Mongoose:        
const mongoose = require('mongoose');

// Require bcrypt --> uncomment later when adding authentication
const bcrypt = require('bcrypt');

const userSchema= mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, "Username should be 5 characters or longer."],
        maxlength: [20, "Username should be less than 20 characters."]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password is too short"]
    }
},
{ timestamps: true });

// -- Verify Password functionality -- //
userSchema.methods.verifyPassword = function(password) { // password is passed to us as a parameter
    // console.log("password from user: " + password);
    // console.log("password from database: " + this.password);
    return bcrypt.compareSync(password /* plaintext */, this.password) /*encrypted*/
    // if both match, return true, else false
        // this return is passed in ppConfig.js
}


const User = mongoose.model("User", userSchema);

module.exports = User;