const expect = require('expect')

const { isRealString } = require('./validation')

describe('isRealString', function() {
  it('should reject non-string values', () => {
    var resp = isRealString(34)
    expect(resp).toBe(false)
  })

  it('should reject string with only spaces', () => {
    var resp = isRealString('    ')
    expect(resp).toBe(false)
  })

  it('should allow string with non-space characters', () => {
    var resp = isRealString('Devel opers')
    expect(resp).toBe(true)
  })
})
