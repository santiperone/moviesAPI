const { User, Sequelize } = require('../data/models');
const Op = Sequelize.Op;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
            if (userExists) return res.status(400).json({ error: 'username or email already in use' });
            newUser.password = await bcrypt.hash(newUser.password, 10);
            const createdUser = await User.create(req.body);
            const status = 201;
            const message = 'Succesfully created user';
            return res.status(status).json( { status, message, data: createdUser });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async createToken(req, res) {
        try {
            const reqUser = req.body
            if (!reqUser) return res.status(400).json({ error: 'You must include your user credentials' });

            const userCheck = await User.findOne({ where: { username: reqUser.username }});
            const passwordCheck = await bcrypt.compare(reqUser.password, userCheck.password);
            if (!passwordCheck) return res.status(401).json({ error: 'Incorrect username or password' });

            const payload = {
                uid: userCheck.id
            }
            const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
            await userCheck.update({ ...userCheck, refreshToken });
            
            const status = 201
            return res.status(status).json( { status, token: refreshToken });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    async refreshToken(req, res) {
        try {
            if(!req.headers.authorization) return res.status(401).json({ error: 'You must pass an authorization header token' });
            const headerToken = req.headers.authorization.split(' ')[1]  // takes the token passed in headers without 'Bearer '
            const tokenContent = jwt.verify(headerToken, process.env.JWT_REFRESH_SECRET);

            const user = await User.findByPk(tokenContent.uid);
            if (user.refreshToken !== headerToken) return res.status(401).json({ error: 'Invalid Token' });

            const payload =  {
                uid: user.id,
                scope: 'full_access'
            }
            const accessToken = jwt.sign(payload, process.env.JWT_TOKEN_SECRET, { expiresIn: '30m' });
            
            const status = 201
            return res.status(status).json( { status, token:accessToken });
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },
}