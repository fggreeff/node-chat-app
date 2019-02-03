const expect = require('expect')
const { Users } = require('./users')

describe('Users', () => {
  var users

  beforeEach(() => {
    users = new Users()
    users.users = [
      { id: '01', name: 'Jeff', room: 'HON' },
      { id: '02', name: 'Jenny', room: 'HON' },
      { id: '03', name: 'Jez', room: 'Dota' }
    ]
  })

  it('should add an new user', () => {
    var user = { id: '123eer', name: 'Jeff', room: 'LOL' }
    var users = new Users()

    var resUser = users.addUser(user.id, user.name, user.room)
    expect(users.users).toEqual([user])
    expect(resUser).toMatchObject(user)
  })

  it('should return names for room HON', () => {
    var userList = users.getUserList('HON')

    expect(userList).toEqual(['Jeff', 'Jenny'])
  })

  it('should return names for room Dota', () => {
    var userList = users.getUserList('Dota')

    expect(userList).toEqual(['Jez'])
  })

  it('should remove a user', () => {
    var userId = '01'
    var user = users.removeUser(userId)

    expect(user.id).toBe(userId)
    expect(users.users.length).toBe(2)
  })

  it('should not remove a user', () => {
    var userId = '999'
    var user = users.removeUser(userId)

    expect(user).not.toBeDefined()
    expect(users.users.length).toBe(3)
  })

  it('should find user', () => {
    var userId = '03'
    var user = users.getUser(userId)

    expect(user).toEqual({ id: '03', name: 'Jez', room: 'Dota' })
    expect(user.id).toBe(userId)
  })

  it('should not find user', () => {
    var nonExistentUserId = '099'
    var user = users.getUser(nonExistentUserId)

    expect(user).not.toBeDefined()
  })

  it('should find user in list', () => {
    var userName = 'Jenny'
    var room = 'HON'
    var user = users.getUserInList(room, userName)

    expect(user).toBe('Jenny')
  })

  it('should not find user in list', () => {
    var userName = 'Ray'
    var room = 'HON'
    var user = users.getUserInList(room, userName)

    expect(user).not.toBeDefined()
  })
})
