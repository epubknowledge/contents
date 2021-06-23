const chalk = require('chalk')

const log = console.log

module.exports = {
  errMessage: m => {
    log(chalk.red('Error:'), chalk.white(m))
    return process.exit(1)
  },
}
