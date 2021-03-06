fs = require('fs')
const chalk = require('chalk')

module.exports = f => {
  try {
    const sizer = fs.statSync(f).size
    return Number.isInteger(sizer) ? sizer : new Error()
  } catch {
    console.log(chalk.red('Error:'), chalk.white('file size error'))
    process.exit(1)
  }
}
