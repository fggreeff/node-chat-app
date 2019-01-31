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

  //   removeUser(id) {}

  //   getUser(id) {
  //     this.users.iterable.find(id => {})
  //   }
  //   getUserList(room) {
  //     this.users.iterable.find(room => {})
  //   }
}

module.exports = { Users }
