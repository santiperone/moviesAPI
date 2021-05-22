const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');

router.post('/register', controller.register);
router.post('/refreshToken', controller.createToken);
router.get('/accessToken', controller.refreshToken);

module.exports = router;