const jwt = require('jsonwebtoken')
const config = require('../config/config')
module.exports = (req,res,next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const {user} = jwt.verify(token, config.secretKey).data
            req.authorized = user
        } catch(error) {
            req.authorized = false
        }
    } else
        req.authorized = false
    next()
}