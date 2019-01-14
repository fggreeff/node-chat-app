const path = require('path')
const express = require('express')
const socketIO = require('socket.io')

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

  socket.emit('newMessage', {
    from: 'Pete',
    text: 'Hi, I love working late, how can we help you?',
    createdAt: 1234
  })

  socket.on('createMessage', message => {
    console.log('createMessage: server got your message', message)
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })
})
