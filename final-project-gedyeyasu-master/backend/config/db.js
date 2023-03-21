
const mongoose = require('mongoose')
const { mongodbUrl } = require('./environment')

module.exports = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongodbUrl)
    .then(() => console.log('DB connected successfully.'))
    .catch(err => {
        console.log('DB connection failed.')
        console.log(err)
        process.exit(1)
    })
}