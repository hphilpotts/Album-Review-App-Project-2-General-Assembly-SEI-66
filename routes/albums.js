// -- Requires:
const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

const albumsCtrl = require('../controllers/albums');

const multer = require('multer');
const aws = require('aws-sdk');
const bodyParser = require('body-parser');
const multerS3 = require('multer-s3');    

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_BUCKET_REGION
});

const app = express();
const s3 = new aws.S3;

app.use(bodyParser.json());

var upload = multer({
  storage: multerS3({
      s3: s3,
      acl: 'public-read',
      bucket: 'bucket-name',
      key: function (req, file, cb) {
          console.log(file);
          cb(null, file.originalname); //use Date.now() for unique file keys
      }
  })
});


// ! old multer code
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/upload/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
//     }
//   })
//   let upload = multer({ storage: storage })
//

// -- Routes:
router.get('/album/add', albumsCtrl.album_create_get);
router.post('/album/add', upload.single('image'), albumsCtrl.album_create_post);

router.get('/album/index', albumsCtrl.album_index_get);
router.get('/album/detail', albumsCtrl.album_detail_get);

router.get('/album/edit', albumsCtrl.album_edit_get);
router.post('/album/update', albumsCtrl.album_edit_post);

router.get('/album/delete', albumsCtrl.album_delete);

module.exports = router;