var socket = io()

socket.on('connect', function() {
  console.log('Connected to server')
  document.write('Connected to server')

  socket.emit('createMessage', {
    from: 'Jack Johnson',
    text: 'hey bruv, I need some bannana pancakes here champ'
  })
})

socket.on('disconnect', function() {
  document.write('Disconnected from server')
  console.log('Disconnected from server')
})

socket.on('newMessage', function(message) {
  console.log('newMessage recieved: ', message)
})
