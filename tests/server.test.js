const doSomething = require('../dist/service.js').doSomething

test('adds 1 + 2 to equal 3', () => {
  expect(doSomething(1, 2)).toBe(3)
})
