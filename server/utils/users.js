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
    var user = this.getUser(id)
    if (user) {
      this.users = this.users.filter(user => user.id !== id)
    }
    return user
  }

  getUser(id) {
    return this.users.filter(user => user.id === id)[0]
  }

  getUserList(room) {
    var users = this.users.filter(user => user.room === room)
    var namesArray = users.map(user => user.name)

    return namesArray
  }

  getUserInList(room, name) {
    var usersArr = this.getUserList(room)

    if (usersArr.indexOf(name) > -1) return name
  }

  getRoomList() {
    return this.users.map(user => user.room)
  }
}

module.exports = { Users }
