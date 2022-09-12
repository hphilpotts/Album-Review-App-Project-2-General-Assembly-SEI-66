// -- Requires:
const express= require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

const albumsCtrl = require('../controllers/albums');

// -- Routes:
router.get('/album/add', albumsCtrl.album_create_get);
router.post('/album/add', albumsCtrl.album_create_post);

router.get('/album/index', albumsCtrl.album_index_get);
router.get('/album/detail', albumsCtrl.album_detail_get);

router.get('/album/edit', albumsCtrl.album_edit_get);
router.post('/album/update', albumsCtrl.album_edit_post);

router.get('/album/delete', albumsCtrl.album_delete);

module.exports = router;