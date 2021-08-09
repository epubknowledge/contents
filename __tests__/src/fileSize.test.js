path = require('path')

const testDir = require('../setup')
const fileSize = require('../../src/fileSize')

const badPath = path.resolve(testDir, `!@#$%^&*()`)

test('Test file size of mimetype', async () => {
  const size = await fileSize(path.resolve(testDir, 'mimetype'))
  expect(size).toEqual(20)
})

test('Test with bad file path', async () => {
  try {
    const mock = jest.spyOn(process, 'exit').mockImplementation(() => {})
    await fileSize(badPath)
    expect(mock).toHaveBeenCalledWith(ERROR_CODE)
    mock.mockRestore()
  } catch {}
})

test(`Test error should console log`, async () => {
  try {
    await fileSize(badPath)
    expect(console.log).toHaveBeenCalledWith('Error: file size error')
  } catch {}
})
