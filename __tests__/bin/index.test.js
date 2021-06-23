// const fs = require('fs')
const path = require('path')

const testDir = require('../setup')
const parser = require('../../src/parser')

console.log('md: ', testDir)

test('Test if the directory mobi-dick exists', async () =>
  expect(testDir).toContain('__tests__/moby-dick'))

test('Test path passed to parser returns object', async () =>
  expect(await parser(testDir)).toBeInstanceOf(Object))

test('Test if dir is empty', async () => {
  const emptyDir = path.resolve(testDir, 'META-INF', 'empty')
  const parsed = await parser(emptyDir)
  console.log('empty: ', parsed)
  // expect(parsed).toBeInstanceOf(Object)
})
