const path = require('path')
const express = require('express')
const socketIO = require('socket.io')

const { generateMessage } = require('./utils/message')

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

generateMessage.from = 'Admin'
generateMessage.text = 'Welcome to the chat app'

io.on('connection', socket => {
  console.log('New user connected')

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

  //broadcast call
  socket.broadcast.emit(
    'newMessage',
    generateMessage('Admin', 'New user joined')
  )

  socket.on('createMessage', generateMessage => {
    io.emit('newMessage', {
      from: generateMessage.from,
      text: generateMessage.text,
      createdAt: generateMessage.createdAt
    })
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })
})
