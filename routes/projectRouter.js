const express = require('express');
const router = express.Router();

const projectController = require('../controller/projectController');

router.post('/create', projectController.create);
router.post('/delete/:id', projectController.delete);
router.get('/:id', projectController.get);

module.exports = router;
