const express = require('express');
const router = express.Router();

const issueController = require('../controller/issueController');

router.post('/create', issueController.create);

module.exports = router;
