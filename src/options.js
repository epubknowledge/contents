const options = (obj, args) => {
  // console.log('obj', typeof obj === 'object' && obj !== null)
  // console.log('args:',args)

  try {
    return Array.isArray(args) === true ? modMulti(obj, args) : modSingle(obj, args)
  } catch (e) {
    console.log('Error: ', e)
  }
}

const modSingle = async (obj, value) => {
  let newObj = []
  await Object.keys(obj).map(
    key => obj[key].path.full.toString().toLowerCase().includes(value) && newObj.push(obj[key]),
  )
  return newObj
}

const modMulti = async (obj, value) => {
  let newObj = []
  await Object.keys(obj).map(key => {
    const parsed = obj[key].path.full.toString().toLowerCase()
    value.map(item => {
      parsed.includes(item) && newObj.push(obj[key])
    })
  })
  return newObj
}

module.exports = options
