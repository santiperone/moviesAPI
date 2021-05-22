const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    try {
        if(!req.headers.authorization) return res.status(401).json({ error: 'You must pass an authorization header token' });
        const headerToken = req.headers.authorization.split(' ')[1]  // takes the token passed in headers without 'Bearer '
        const tokenContent = jwt.verify(headerToken, process.env.JWT_TOKEN_SECRET);
        console.log(tokenContent);
        next()        
    } catch (error) {
        return res.status(403).json({ error: error.message })
    }
}