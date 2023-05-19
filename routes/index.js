const express = require('express');
const router = express.Router();

const homeController = require('../controller/homeController');
const projectRouter = require('./projectRouter');
const issueRouter = require('./issueRouter');

router.get('/', homeController.home);
router.use('/project', projectRouter);
router.use('/issue', issueRouter);

module.exports = router;
