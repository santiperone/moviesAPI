const express = require('express');
const router = express.Router();
const controller = require('../controllers/actorsController');

router.get('/', controller.main);

module.exports = router;