// -- Requires:
const express= require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

const instructionsCtrl = require('../controllers/instructions');

// -- Routes:
router.get('/instruction/add', instructionsCtrl.instruction_create_get);
router.post('/instruction/add', instructionsCtrl.instruction_create_post);

router.get('/instruction/index', instructionsCtrl.instruction_index_get);
router.get('/instruction/detail', instructionsCtrl.instruction_detail_get);

router.get('/instruction/edit', instructionsCtrl.instruction_edit_get);
router.post('/instruction/update', instructionsCtrl.instruction_edit_post);

router.get('/instruction/delete', instructionsCtrl.instruction_delete);

module.exports = router;