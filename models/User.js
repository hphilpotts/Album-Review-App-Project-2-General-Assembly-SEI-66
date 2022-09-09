// Require Mongoose:        
const mongoose = require('mongoose');

// Require bcrypt --> uncomment later when adding authentication
// const bcrypt = require('bcrypt');

const userSchema= mongoose.Schema({
    // --> can change firstName and lastName properties below to one 'screen name'?
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name should be 3 characters or longer."],
        maxlength: [20, "First name is too many characters long."]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name should be 3 characters or longer."],
        maxlength: [20, "Last name is too many characters long."]
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
    // --> Possibly add instructionsCreated if required?
},
{ timestamps: true });

// -- Verify Password functionality, ignore now but add later during auth development -- //
// userSchema.methods.verifyPassword = function(password) { // password is passed to us as a parameter
//     console.log("password from user: " + password);
//     console.log("password from database: " + this.password);
//     return bcrypt.compareSync(password /* plaintext */, this.password) /*encrypted*/
//     // if both match, return true, else false
//         // this return is passed in ppConfig.js
// }


const User = mongoose.model("User", userSchema);

module.exports = User;