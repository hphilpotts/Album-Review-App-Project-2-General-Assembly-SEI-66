// -- Requires:
const express = require('express');
const multer = require('multer');
const imgCtrl = require('../controllers/imageController');
const albumsCtrl = require('../controllers/albums');
const isLoggedIn = require('../helpers/isLoggedIn');

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

const memoryStorage = multer.memoryStorage();

const upload = multer({ storage: memoryStorage });


// -- Routes:
router.get('/album/add', isLoggedIn, albumsCtrl.album_create_get);
router.post('/album/add',
  upload.single('image'),
  imgCtrl.resizeUploadedImage,
  imgCtrl.storeInS3,
  albumsCtrl.album_create_post
);

router.get('/album/index', albumsCtrl.album_index_get);
router.get('/album/genre_index', albumsCtrl.album_genre_get);
router.get('/album/artist_index', albumsCtrl.album_artist_get);
router.get('/album/detail', albumsCtrl.album_detail_get);

router.get('/album/edit', isLoggedIn, albumsCtrl.album_edit_get);
router.post('/album/update', albumsCtrl.album_edit_post);

router.get('/album/delete', isLoggedIn, imgCtrl.deleteFromS3, albumsCtrl.album_delete);

module.exports = router;