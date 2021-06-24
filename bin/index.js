const isDir = require('../src/isDir')
const parser = require('../src/parser')
const options = require('../src/options')

module.exports = async (dir, args = false) => {
  const buildDir = await isDir(dir)
  const result = await parser(buildDir)
  return args === false ? result : await options(result, args)
}
