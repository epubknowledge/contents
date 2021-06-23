const testDir = require('../setup')
const parser = require('../../src/parser')

test('Test length', async () => {
  const parsed = await parser(testDir)
  expect(parsed.length).toEqual(154)
})

test(`Bad dir passed`, async () => {
  try {
    const mock = jest.spyOn(process, 'exit').mockImplementation(() => {})
    await parser(['1'])
    expect(mock).toHaveBeenCalledWith(ERROR_CODE)
  } catch {}
})

test(`Should console log error message`, async () => {
  try {
    await parser(['1'])
    expect(console.log).toHaveBeenCalledWith('Error: 1 is not string')
  } catch {}
})
