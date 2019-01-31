const expect = require('expect')
const { Users } = require('./users')

describe('Users', () => {
  it('should add an new user', () => {
    var user = { id: '123eer', name: 'Jeff', room: 'HON' }
    var users = new Users()

    var resUser = users.addUser(user.id, user.name, user.room)
    expect(users.users).toEqual([user])
    expect(resUser).toBe(user)
  })
})
