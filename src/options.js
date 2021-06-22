const {modDir} = require('./modify')

const options = (obj,args) => {
  // console.log('obj', typeof obj === 'object' && obj !== null)
  // console.log('args:',args)

  try {
    return Array.isArray(args) === true ? handleArray(args) : caseOptions(obj,args)
  } catch (e) {
    console.log('Error: ', e)
  }
}

const handleArray = (args) => {
  let mod = {}
  
  args.map((item) => {
    console.log('item: ',item)
  })
}

const caseOptions = (obj,arg) => {
  switch (arg.trim().toLowerCase()) {
    case 'meta':
        return modDir(obj, 'meta-inf')
    case 'oebps':
      return modDir(obj, 'oebps')
      case 'css':
      return modDir(obj,'css')
    case 'font':
    return modDir(obj,'font')
case 'img':
    return modDir(obj,'img')
    case 'text':
    return modDir(obj,'text')


      // case 'mime':
    // return modify('mime')
    // case 'opf':
    // return modify('opf')
    // case 'css':
    // return modify('css')
    // case 'nav':
    // return modify('nav')
    // case 'audio':
    // return modify('audio')
    // case 'video':
    // return modify('video')

    default: return obj
  }
}

module.exports = options
