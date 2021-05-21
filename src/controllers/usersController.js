const { User } = require('../data/models');
const bcrypt = require('bcryptjs');

module.exports = {
    async register(req, res) {
        try {
            const newUser = req.body
            newUser.password = await bcrypt.hash(newUser.password, 10);
            const createdUser = await User.create(req.body);
            const status = 201;
            const message = 'Succesfully created user'
            return res.status(status).json( { status, message, data: createdUser });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
    async createToken(req, res) {
        try {
            
            return res.status(status).json( { status, message, data: user });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
    async refreshToken(req, res) {
        try {
            
            return res.status(status).json( { status, message, data: user });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
}