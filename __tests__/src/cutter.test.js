const path = require('path')

const cutter = require('../../src/cutter')
const testDir = require('../setup')

const testPath = path.resolve(testDir, 'some', 'weird', 'path')

test(`Test cut to remove beginning of path outside 'some'`, async () => {
  const cut = await cutter(testPath, 'some')
  expect(cut).toEqual('/weird/path')
})

test(`Test cut missing second parameter`, async () => {
  try {
    const mock = jest.spyOn(process, 'exit').mockImplementation(() => {})
    await cutter([])
    expect(mock).toHaveBeenCalledWith(ERROR_CODE)
  } catch {}
})

test(`Test error should console log`, async () => {
  try {
    await cutter([])
    expect(console.log).toHaveBeenCalledWith('Error: trim error')
  } catch {}
})
