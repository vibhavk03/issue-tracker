const express = require('express');
const router = express.Router();

const projectController = require('../controller/projectController');

router.post('/create', projectController.create);
router.post('/home/delete/:id', projectController.deleteFromHome);

module.exports = router;
