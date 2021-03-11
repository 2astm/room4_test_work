const jwt = require('jsonwebtoken')
const config = require('../config/config')
module.exports = (req,res,next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const {userId} = jwt.verify(token, config.secretKey).data
            req.authorized = userId
        } catch(error) {
            req.authorized = false
        }
    } else
        req.authorized = false
    next()
}