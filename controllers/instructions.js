// -- Requires:

// Require Models:
const { Instruction } = require('../models/Instruction')
// const { User } = require('../models/User');
// const { Post } = require('../models/Post');

// Require moment for timestamp formatting:
const moment = require('moment');

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
        res.redirect('/instruction/index');
    })
    .catch((err) => {
        console.log(err);
        res.send('THIS IS AN ERROR')
    })
}

// READ
// HTTP GET - Instructions Index
exports.instruction_index_get = (req, res) => {
    Instruction.find()
    .then(instructions => {
        res.render('instruction/index', { instructions, moment });
    })
    .catch(err => {
        console.log(err);
        res.send('ERROR?');
    })
}

// HTTP GET - Instructions Detail
exports.instruction_detail_get = (req, res) => {
    Instruction.findById(req.query.id)// later, populate linked posts .populate('post')
    .then(instruction => {
        res.render('instruction/detail', { instruction, moment });
    })
    .catch(err => {
        console.log(err);
        res.send('...ERROR?');
    })
}

// UPDATE
// HTTP GET - Get Edit Instructions Page by ID:
exports.instruction_edit_get = (req, res) => {
    Instruction.findById(req.query.id)
    .then((instruction) => {
        res.render('instruction/edit', { instruction })
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP POST - Edit Instruction and Update
exports.instruction_edit_post = (req, res) => {
    Instruction.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect('/instruction/index');
    })
    .catch(err => {
        console.log(err);
    })
}

// DELETE
// HTTP DELETE - Delete Cylcist by ID
exports.instruction_delete = (req, res) => {
    Instruction.findByIdAndDelete(req.query.id)// .populate('post')
    .then(() => {
        res.redirect('/instruction/index');
    })
    .catch(err => {
        console.log(err);
        res.send('Uh oh');
    })
}
