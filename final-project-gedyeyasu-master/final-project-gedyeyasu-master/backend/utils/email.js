
const nodemailer = require('nodemailer')
const { gmailKey, gmailUserName } = require('../config/environment')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

const client = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: gmailUserName,
        pass: gmailKey
    }
})

exports.sendEmail = async (email, subject, text) => {
    return client.sendMail({
        from: gmailUserName,
        to: email,
        subject,
        text
    })
}

const readFileAsync = filePath => new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) reject(err)
        else resolve(data)
    })
})

exports.sendReceiptEmail = async (email, order) => {

    const subject = 'Thank you for your order #' + order._id
    const htmlContent = await readFileAsync(path.join(__dirname, 'receipt.html'))
    const template = ejs.compile(htmlContent)
    
    return client.sendMail({
        from: gmailUserName,
        to: email,
        subject,
        html: template({ order })
    })
}
