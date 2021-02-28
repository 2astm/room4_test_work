const jwt = require('jsonwebtoken')
const config = require('../config/config')
module.exports = (req,res,next) => {
    const token = req.headers.authorization;
    if (token) {
        const {user} = jwt.verify(token, config.secretKey)
        req.authorized = user
    } else
        req.authorized = false
}