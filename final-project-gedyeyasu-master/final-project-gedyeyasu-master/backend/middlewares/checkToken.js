
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

module.exports = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if (!token) return next(new Error('Authentication Failed'))

    req.user = await jwt.verify(token, secret)
    
    next()
}
