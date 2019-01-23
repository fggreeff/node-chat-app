const expect = require('expect')

const { generateMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'pete'
    var text = 'my lovely message'

    var resultMessage = generateMessage('pete', 'my lovely message')

    expect(resultMessage).toMatchObject({ from, text })
    expect(typeof resultMessage.createdAt).toBe('number')
  })
})
