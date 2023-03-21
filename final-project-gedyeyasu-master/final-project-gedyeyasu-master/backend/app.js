
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const setupRoutes = require('./routes')
const connectDB = require('./config/db')
const { port } = require('./config/environment')
const path = require('path')

connectDB()

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

setupRoutes(app)

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        status: false,
        message: err.message
    })
})

app.listen(port, () => console.log(`listening :${port}`))
