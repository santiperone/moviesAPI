const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.post('/register', controller.register);
router.post('/token', controller.createToken);
router.put('/token', controller.refreshToken);

module.exports = router;