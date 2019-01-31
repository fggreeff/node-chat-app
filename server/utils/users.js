;[
  {
    id: '12312435',
    name: 'fran',
    room: '9fans'
  }
]

class Users {
  constructor() {
    this.users = []
  }
  addUser(id, name, room) {
    var user = { id, name, room }
    this.users.push(user)
    return user
  }

  removeUser(id) {
    var users = this.users.filter(user => {
      return user.id === id
    })
  }

  getUser(id) {
    var users = this.users.filter(user => {
      if (user.id === id) return user.name
    })
  }

  getUserList(room) {
    var users = this.users.filter(user => user.room === room)
    var namesArray = users.map(user => user.name)

    return namesArray
  }
}

module.exports = { Users }
