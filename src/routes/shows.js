const express = require('express');
const router = express.Router();
const controller = require('../controllers/showsController');

router.get('/', controller.main);

module.exports = router;