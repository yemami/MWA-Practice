const { webUrl, secret } = require('../config/environment')
const User = require('../models/user')
const { sendEmail } = require('../utils/email')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.signup = async (req, res, next) => {
    try {
        const userData = req.body
        userData.password = await bcrypt.hash(userData.password, 10)
        const user = await User.create(userData)

        const token = await jwt.sign({ 
            id: user._id, 
            email: user.email
        }, secret)
        const verifyToken = await jwt.sign({ email: user.email }, secret)

        await sendEmail(
            user.email, 
            'Verify your email',
            `Please verify your email using this link - ${webUrl}/verify-email/${verifyToken}`
        )

        res.json({
            user: {
                _id: user._id, email: user.email,
                firstName: user.firstName, lastName: user.lastName
            },
            emailVerified: user.emailVerified,
            token
        })
    } catch(err) {
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        
        const user = await User.findOne({ email })
        if (!user) return next(new Error('Login Failed'))

        const match = await bcrypt.compare(password, user.password)
        if (!match) return next(new Error('Login Failed')) 

        const token = await jwt.sign({ 
            id: user._id, 
            email: user.email
        }, secret)

        res.json({
            user: { _id: user._id, email: user.email,
                firstName: user.firstName, lastName: user.lastName 
            },
            emailVerified: user.emailVerified,
            token
        })
    } catch(err) {
        next(err)
    }
}

exports.verifyEmail = async (req, res, next) => {
    try {
        const { verifyToken } = req.params

        const { email } = await jwt.verify(verifyToken, secret)
        const result = await User.updateOne({ email }, { 
            $set: { emailVerified: true }
        })

        res.json({
            status: true,
            message: 'Email verified successfully'
        })
    } catch(err) {
        next(err)
    }
}

exports.forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body
        
        const user = await User.findOne({ email })

        if (user) {
            const verifyToken = await jwt.sign({ email: user.email }, secret)

            await sendEmail(
                email, 
                'Click here to reset your password',
                `Click here to reset your password - ${webUrl}/reset-password/${verifyToken}`
            )
        }

        res.json({
            status: true,
            message: 'Reset link is sent to this email successfully'
        })
    } catch(err) {
        next(err)
    }
}

exports.resetPassword = async (req, res, next) => {
    try {
        const { verifyToken } = req.params
        const { password, confirmPassword } = req.body

        if (password !== confirmPassword) return next(new Error('Password Mismatch'))

        const { email } = await jwt.verify(verifyToken, secret)
        const hashedPassword = await bcrypt.hash(password, 10)

        await User.updateOne({ email }, {
            $set: { password: hashedPassword }
        })

        res.json({ 
            status: true,
            message: 'Password reset successful.'
        })
    } catch(err) {
        next(err)
    }
}