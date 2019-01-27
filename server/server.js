const path = require('path')
const express = require('express')
const socketIO = require('socket.io')

const { generateMessage, generateLocationMessage } = require('./utils/message')

const publicPath = path.join(__dirname, '../public')
console.log(publicPath)

const port = process.env.PORT || 5000
var app = express()

// var server = http.createServer((app))
const server = app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})
var io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', socket => {
  console.log('New user connected')

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

  //broadcast call
  socket.broadcast.emit(
    'newMessage',
    generateMessage('Admin', 'New user joined')
  )

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message)

    io.emit('newMessage', generateMessage(message.from, message.text))
    callback('THis is from the server')
  })

  socket.on('createLocationMessage', coords => {
    io.emit(
      'newLocationMessage',
      generateLocationMessage('Admin', coords.latitude, coords.longitude)
    )
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })
})
