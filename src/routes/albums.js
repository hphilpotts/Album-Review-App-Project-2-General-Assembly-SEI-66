// -- Album Routes ---


// -- Requires / setup:
const express = require('express');
const multer = require('multer');
const imageController = require('../controllers/imageController');
const albumsController = require('../controllers/albums');
const isLoggedIn = require('../helpers/isLoggedIn');

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

const memoryStorage = multer.memoryStorage();
const upload = multer({ storage: memoryStorage });


// -- Routes:

// Create Album
router.get('/album/add', isLoggedIn, albumsController.album_create_get);
router.post('/album/add',
  upload.single('image'),
  imageController.resizeUploadedImage,
  imageController.storeInS3,
  albumsController.album_create_post
);

// Read Album(s)
router.get('/album/index', albumsController.album_index_get);
router.get('/album/genre_index', albumsController.album_genre_get);
router.get('/album/artist_index', albumsController.album_artist_get);
router.get('/album/detail', albumsController.album_detail_get);

// Update Album
router.get('/album/edit', isLoggedIn, albumsController.album_edit_get);
router.post('/album/update', albumsController.album_edit_post);

// Delete Album
router.get('/album/delete', isLoggedIn, imageController.deleteFromS3, albumsController.album_delete);


module.exports = router;