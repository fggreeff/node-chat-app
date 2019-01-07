const path = require('path')
const express = require('express')

const { config } = require('./config')

const publicPath = path.join(__dirname, '../public')

var app = express()
const port = process.env.PORT

app.use(express.static(publicPath))

app.listen(port, () => {
  console.log(`started on port ${port}`)
})

module.exports = { app }
