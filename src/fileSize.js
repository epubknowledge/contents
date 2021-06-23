const fs = require('fs')
const chalk = require('chalk')
const log = console.log

const fileSize = f => {
  try {
    return fs.statSync(f).size
  } catch (e) {
    log(chalk.red('Error:'), chalk.white('file size error'))
    process.exit(1)
  }
}

module.exports = fileSize
