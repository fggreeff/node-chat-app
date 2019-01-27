const expect = require('expect')

const { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'pete'
    var text = 'my lovely message'

    var resultMessage = generateMessage('pete', 'my lovely message')

    expect(resultMessage).toMatchObject({ from, text })
    expect(typeof resultMessage.createdAt).toBe('number')
  })
})

describe('generateLocationMessage', () => {
  it('should generate a location message', async () => {
    var from = 'Adam'
    var lat = 22.2
    var lng = 11.1
    var url = `https://www.google.com/maps/?q=22.2,11.1`

    var resultLocationMessage = generateLocationMessage('Adam', lat, lng)

    expect(resultLocationMessage).toMatchObject({ from, url })
    expect(typeof resultLocationMessage.createdAt).toBe('number')
  })
})
