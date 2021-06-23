const fs = require('fs')
const chalk = require('chalk')
const log = console.log

const fileSize = f => {
  try {
    const sizer = fs.statSync(f).size
    return Number.isInteger(sizer) ? sizer : new Error()
  } catch (e) {
    log(chalk.red('Error:'), chalk.white('file size error'))
    process.exit(1)
  }
}

module.exports = fileSize
