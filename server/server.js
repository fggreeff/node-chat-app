const path = require('path')
const express = require('express')
const socketIO = require('socket.io')

const { generateMessage, generateLocationMessage } = require('./utils/message')
const { isRealString } = require('./utils/validation')
const { Users } = require('./utils/users')

const publicPath = path.join(__dirname, '../public')
console.log(publicPath)

const port = process.env.PORT || 5000
var app = express()

// var server = http.createServer((app))
const server = app.listen(port, () => {
  console.log(`Server is up on ${port}`)
})
var io = socketIO(server)
var users = new Users()

app.use(express.static(publicPath))

io.on('connection', socket => {
  console.log('New user connected')

  socket.on('join', (params, callback) => {
    if (!isRealString(params.name) || !isRealString(params.room)) {
      return callback('Name and room name are reqiured.')
    }
    //joining connections with the same room name
    socket.join(params.room)
    users.removeUser(socket.id)
    users.addUser(socket.id, params.name, params.room)

    io.to(params.room).emit('updateUserList', users.getUserList(params.room))
    socket.emit(
      'newMessage',
      generateMessage('Admin', 'Welcome to the chat app')
    )

    //broadcast call to the room
    socket.broadcast
      .to(params.room)
      .emit('newMessage', generateMessage('Admin', `${params.name} has joined`))
    callback()
  })

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
    var user = users.removeUser(socket.id)

    if (user) {
      io.to(user.room).emit('updateUserList', users.getUserList(user.room))
      io.to(user.room).emit(
        'newMessage',
        generateMessage('Admin', `${user.name} has left`)
      )
    }

    //socket.leave()
    console.log('User was disconnected')
  })
})
