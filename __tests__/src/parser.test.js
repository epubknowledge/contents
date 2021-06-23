const path = require('path')
const testDir = require('../setup')
const parser = require('../../src/parser')

test('Test length', async () => {
  const parsed = await parser(testDir)
  expect(parsed.length).toEqual(154)
})
