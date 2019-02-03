var socket = io()

var chatRooms = jQuery('#chat-rooms')

socket.on('updateChatList', function(rooms) {
  rooms.forEach(room => {
    chatRooms.append(jQuery('<option></option>').text(room))
  })
  console.log('room list', rooms)
})
