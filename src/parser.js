const path = require('path')
const glob = require('glob')

const cutter = require('./cutter')
const fileSize = require('./fileSize')

const parser = dir => {
  return new Promise((res, rej) => {
    if (typeof dir !== 'string') return rej()

    glob(
      path.resolve(`${dir}/**/*`),
      { strict: false, silent: true, nodir: true },
      (err, files) => {
        if (err) return rej()

        const cut = path.basename(dir)
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

module.exports = parser
