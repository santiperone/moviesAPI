const { User, Sequelize } = require('../data/models');
const Op = Sequelize.Op;
const bcrypt = require('bcryptjs');

module.exports = {
    async register(req, res) {
        try {
            const newUser = req.body
            const userExists = await User.findOne({ 
                where: {
                    [Op.or]: [
                    {username: newUser.username},
                    {email: newUser.email},
                    ]
                }
            });
            if (userExists) throw new Error('username or email already in use');
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