const options = (obj, args) => {
  // console.log('obj', typeof obj === 'object' && obj !== null)
  // console.log('args:',args)

  return Array.isArray(args) === true ? modMulti(obj, args) : modSingle(obj, args)
}

const modSingle = async (obj, value) => {
  const reg = new RegExp(value, 'g')
  let newObj = []
  await Object.keys(obj).map(key => {
    obj[key].path.full.toString().match(reg) && newObj.push(obj[key])
  })
  return newObj
}

const modMulti = async (obj, value) => {
  let newObj = []
  await Object.keys(obj).map(key => {
    const parsed = obj[key].path.full.toString()
    value.map(item => {
      const reg = new RegExp(item, 'g')
      parsed.match(item) && newObj.push(obj[key])
    })
  })
  return newObj
}

module.exports = options
