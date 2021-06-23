const chalk = require('chalk')
const log = console.log

const cutter = (p, fat) => {
  try {
    const trimmed = p.split(fat)
    return trimmed.length === 2 ? trimmed[1] : trimmed[0]
  } catch (e) {
    log(chalk.red('Error:'), chalk.white('trim error'))
    process.exit(1)
  }
}

module.exports = cutter
