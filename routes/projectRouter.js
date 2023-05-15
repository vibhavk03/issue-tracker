const express = require('express');
const router = express.Router();

const projectController = require('../controller/projectController');

router.post('/create', projectController.create);
// router.delete('/:id', projectController.deleteProject);

module.exports = router;
