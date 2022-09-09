// -- Requires:
const express= require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

const instructionsCtrl = require('../controllers/instructions');

// -- Routes:
router.get('/instruction/add', instructionsCtrl.instruction_create_get);
router.post('/instruction/add', instructionsCtrl.instruction_create_post);

module.exports = router;