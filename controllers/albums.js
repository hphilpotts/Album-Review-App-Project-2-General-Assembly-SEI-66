// -- Requires:

// Require Models:
const { Album } = require('../models/Album')
const { User } = require('../models/User');
const { Review } = require('../models/Review');

// Require moment for timestamp formatting:
const moment = require('moment');

// -- APIs:

// CREATE
// HTTP GET - Load New Album Form:
exports.album_create_get = (req, res) => {
    res.render('album/add');
}
// HTTP POST - Add new Album API:
exports.album_create_post = (req, res) => {
    let album = new Album(req.body);
<<<<<<< HEAD
=======

    console.log(album)
>>>>>>> b044392a1acdab2e189dd319ada46f37b142a056

    album.save()
    .then(() => {
        console.log('saved!')
        res.redirect('/album/index');
    })
    .catch((err) => {
        console.log(err);
        res.send('THIS IS AN ERROR')
    })
}

// READ
// HTTP GET - Albums Index
exports.album_index_get = (req, res) => {
    Album.find()
    .then(albums => {
        res.render('album/index', { albums, moment });
    })
    .catch(err => {
        console.log(err);
        res.send('ERROR?');
    })
}

// HTTP GET - Albums Detail
exports.album_detail_get = (req, res) => {
    // This is the bit that is causing us problems!
    Album.findById(req.query.id).populate({ 
        path: 'review',
        populate: {
          path: 'createdBy',
          model: 'User'
        } 
      })
    .then
    (album => {
        res.render('album/detail', { album, moment });
    })
    .catch(err => {
        console.log(err);
        res.send('...ERROR?');
    })
}

// UPDATE
// HTTP GET - Get Edit Albums Page by ID:
exports.album_edit_get = (req, res) => {
    Album.findById(req.query.id)
    .then((album) => {
        res.render('album/edit', { album })
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP POST - Edit Album and Update
exports.album_edit_post = (req, res) => {
    Album.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect('/album/index');
    })
    .catch(err => {
        console.log(err);
    })
}

// DELETE
// HTTP DELETE - Delete Album by ID
exports.album_delete = (req, res) => {
    Album.findByIdAndDelete(req.query.id)// .populate('review') - check if correct??
    .then(() => {
        res.redirect('/album/index');
    })
    .catch(err => {
        console.log(err);
        res.send('Uh oh');
    })
}
