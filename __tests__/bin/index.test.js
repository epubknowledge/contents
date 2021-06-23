const path = require('path')
const testDir = require('../setup')
const parser = require('../../src/parser')

test('Test if the directory mobi-dick exists', async () =>
  expect(testDir).toContain('__tests__/moby-dick'))

test('Test path passed to parser returns object', async () =>
  expect(await parser(testDir)).toBeInstanceOf(Object))
