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
    album.albumCover = req.body.key;

    album.save()
    .then(() => {
        req.flash( "success", "Album added successfully!");
        res.redirect('/album/index');
    })
    .catch((err) => {
        console.error(err);
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
        console.error(err);
        res.send('ERROR?');
    })
}

// HTTP GET - Albums Index by Genre

exports.album_genre_get = (req, res) => {
    Album.find({ genre: req.query.genre })
    .then(albums => {
        res.render('album/index', { albums, moment })
    })
    .catch(err => {
        console.error(err);
        res.send('ERROR?');
    })
}

// HTTP GET - Albums Index by Genre

exports.album_artist_get = (req, res) => {
    Album.find({ artist: req.query.artist })
    .then(albums => {
        res.render('album/index', { albums, moment })
    })
    .catch(err => {
        console.error(err);
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
        console.error(err);
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
        console.error(err);
    })
}

// HTTP POST - Edit Album and Update
exports.album_edit_post = (req, res) => {
    Album.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        req.flash( "success", "Album information updated successfully!");
        res.redirect('/album/index');
    })
    .catch(err => {
        console.error(err);
    })
}

// DELETE
// HTTP DELETE - Delete Album by ID
exports.album_delete = (req, res) => {
    Album.findById(req.query.id)
    // Album.findByIdAndDelete(req.query.id)// .populate('review') - check if correct??
    .then((foundAlbum) => {
        console.log(foundAlbum);
        Review.find({_id: { $in: foundAlbum.review }}).then((reviews) => {
            console.log(reviews);
            // for (const review in reviews) {
            //     console.log(review)
            // }
        })
        req.flash( "info", "Album deleted successfully!");
        res.redirect('/album/index');
    })
    .catch(err => {
        console.error(err);
        res.send('Uh oh');
    })
}
