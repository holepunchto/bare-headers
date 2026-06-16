const test = require('brittle')
const headers = require('.')

test('exports assets', (t) => {
  t.is(typeof headers, 'string')
})
