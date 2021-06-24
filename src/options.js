const { modSingle, modMulti } = require('./mod')

module.exports = (obj, args) =>
  Array.isArray(args) === true ? modMulti(obj, args) : modSingle(obj, args)
