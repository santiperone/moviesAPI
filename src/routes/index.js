const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');

router.get('/', controller.main);

module.exports = router;