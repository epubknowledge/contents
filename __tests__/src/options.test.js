const testDir = require('../setup')
const parser = require('../../src/parser')
const options = require('../../src/options')

const short = async (dir, args) => await options(await parser(dir), args)

test('Test length with empty argument', async () => {
  const testRun = await short(testDir, '')
  expect(testRun.length).toEqual(154)
})

test(`Test for 'mimetype' as argument`, async () => {
  const testRun = await short(testDir, 'mimetype')
  expect(testRun.length).toEqual(1)
})

test(`Test for array ['mimetype','css'] as argument`, async () => {
  const testRun = await short(testDir, ['mimetype', 'css'])
  expect(testRun.length).toEqual(2)
})

test(`Test for array ['images'] as argument`, async () => {
  const testRun = await short(testDir, ['images'])
  expect(testRun.length).toEqual(2)
})

test(`Test for '{}' as argument`, async () => {
  const testRun = await short(testDir, {})
  expect(testRun.length).toEqual(154)
})
