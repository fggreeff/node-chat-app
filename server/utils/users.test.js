const expect = require('expect')
const { Users } = require('./users')

describe('Users', () => {
  var user

  beforeEach(() => {
    var users = new Users()
    users.users = [
      {
        id: '01',
        name: 'Jeff',
        room: 'HON'
      },
      { id: '02', name: 'Jenny', room: 'HON' },
      { id: '03', name: 'Jez', room: 'Dota' }
    ]
  })

  it('should add an new user', () => {
    var user = { id: '123eer', name: 'Jeff', room: 'LOL' }
    var users = new Users()

    var resUser = users.addUser(user.id, user.name, user.room)
    expect(users.users).toEqual([user])
    expect(resUser).toBe(user)
  })

  it('should return names for room HON', () => {
    var userList = users.getUserList('HON')

    expect(userList).toEqual(['Jeff', 'Jenny'])
  })

  it('should return names for room Dota', () => {
    var userList = users.getUserList('Dota')

    expect(userList).toEqual(['Jez'])
  })
})
