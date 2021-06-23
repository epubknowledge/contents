const fs = require('fs')

const fileSize = f => {
  try {
    return fs.statSync(f).size
  } catch (e) {
    console.log('File size error: ', e)
  }
}

module.exports = fileSize
