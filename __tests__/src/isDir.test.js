const path = require('path')

const isDir = require('../../src/isDir')

test('Absolute path should match returned path', async () => {
  const abs = path.join(process.cwd(), '__tests__', 'moby-dick')
  expect(await isDir(abs)).toEqual(abs)
})

test('Relative path should return absolute path', async () => {
  const rel = path.join('__tests__', 'moby-dick')
  const result = path.join(process.cwd(), '__tests__', 'moby-dick')
  expect(await isDir(rel)).toEqual(result)
})

test(`Bad dir passed`, async () => {
  try {
    const mock = jest.spyOn(process, 'exit').mockImplementation(() => {})
    await isDir('moby')
    expect(mock).toHaveBeenCalledWith(ERROR_CODE)
  } catch {}
})

test(`Should console log error message`, async () => {
  try {
    await isDir('moby')
    expect(console.log).toHaveBeenCalledWith('Error: 1 is not string')
  } catch {}
})
