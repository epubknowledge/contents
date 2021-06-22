const parser = require('../src/parser')

const contents = async d => await parser(d)

module.exports = contents