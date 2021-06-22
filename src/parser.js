const fs = require('fs')
const path = require('path')
const glob = require('glob')

const parser = dir => {
  const cut = path.basename(dir)
  return new Promise((res, rej) => {
    glob(
      path.resolve(`${dir}/**/*`),
      { strict: false, silent: true, nodir: true },
      (err, files) => {
        if (err) return rej(err)

        const filesObject = files.map(file => {
          const regexp = /^(.*[\\\/])(.*)$/
          const match = regexp.exec(file)
          return {
            path: {
              full: cutter(file, cut),
              file: cutter(match[1], cut),
            },
            filename: match[2],
            ext: path.extname(match[2]) === '' ? null : path.extname(match[2]),
            size: fileSize(file),
            dirname: regexp.exec(match[1].substring(0, match[1].length - 1))[2],
          }
        })
        res(filesObject)
      },
    )
  })
}

const cutter = (p, fat) => {
  try {
    const trimmed = p.split(fat)
    return trimmed.length === 2 ? trimmed[1] : trimmed[0]
  } catch (e) {
    console.log('trim error: ', e)
  }
}

const fileSize = f => {
  try {
    return fs.statSync(f).size
  } catch (e) {
    console.log('File size error: ', e)
  }
}

module.exports = parser
