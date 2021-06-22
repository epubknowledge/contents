const parser = require('../src/parser')
const options = require('../src/options')

const contents = async (dir, args = false) => {
  const result = await parser(dir)
  return args === false ? result : await options(result,args)
}

module.exports = contents