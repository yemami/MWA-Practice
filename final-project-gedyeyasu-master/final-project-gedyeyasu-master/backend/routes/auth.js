
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.post('/verify-email/:verifyToken', authController.verifyEmail)
router.post('/forgot-password', authController.forgotPassword)
router.post('/reset-password/:verifyToken', authController.resetPassword)

module.exports = router