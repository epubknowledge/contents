const path = require('path')
const testDir = require('../setup')
const parser = require('../../src/parser')

test('Test if dir is empty', async () => {
  const emptyDir = path.resolve(testDir, 'META-INF', 'empty')
  const parsed = await parser(emptyDir)
  console.log('empty: ', parsed)
  // expect(parsed).toBeInstanceOf(Object)
})
