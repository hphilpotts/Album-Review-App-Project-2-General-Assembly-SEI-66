// -- Requires:

// Require Models:
const { Instruction } = require('../models/Instruction')
// const { User } = require('../models/User');
// const { Post } = require('../models/Post');

// Require moment for timestamp formatting:
    // --> uncomment when added
    // --> let Milos know to install from terminal: `npm i moment'
// const moment = require('moment');

// -- APIs:

// CREATE
// HTTP GET - Load New Instruction Form:
exports.instruction_create_get = (req, res) => {
    res.render('instruction/add');
}
// HTTP POST - Add new Instruction API:
exports.instruction_create_post = (req, res) => {
    let instruction = new Instruction(req.body);

    instruction.save()
    .then(() => {
        res.send('redirect to a page instead of just sending this text')
        // --> when path completed chuck in something like:
        // res.redirect('/post/index');
    })
    .catch((err) => {
        console.log(err);
        res.send('THIS IS AN ERROR')
    })
}

