const express = require('express');
const router = express.Router();

const issueController = require('../controller/issueController');

router.post('/create/:id', issueController.create);

module.exports = router;
