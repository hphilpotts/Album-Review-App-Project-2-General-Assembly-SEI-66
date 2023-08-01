// -- Requires:
const { S3Client } = require('@aws-sdk/client-s3');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const albumsCtrl = require('../controllers/albums');
const isLoggedIn = require('../helpers/isLoggedIn');

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

const s3 = new S3Client();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    region: process.env.AWS_REGION,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

// -- Routes:
router.get('/album/add', isLoggedIn, albumsCtrl.album_create_get);
router.post('/album/add', upload.single('image'), albumsCtrl.album_create_post);

router.get('/album/index', albumsCtrl.album_index_get);
router.get('/album/genre_index', albumsCtrl.album_genre_get);
router.get('/album/artist_index', albumsCtrl.album_artist_get);
router.get('/album/detail', albumsCtrl.album_detail_get);

router.get('/album/edit', isLoggedIn, albumsCtrl.album_edit_get);
router.post('/album/update', albumsCtrl.album_edit_post);

router.get('/album/delete', isLoggedIn, albumsCtrl.album_delete);

module.exports = router;