module.exports = {
  modDir: async (obj,value) => {
    let newObj = []
    await Object.keys(obj).map((key) => obj[key].path.full.toString().toLowerCase().includes(`/${value}/`) && newObj.push(obj[key]))
    return newObj
  }
}
