const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

module.exports = dir => {
  try {
    const absolute = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir)
    return fs.lstatSync(absolute).isDirectory() === true ? absolute : new Error()
  } catch {
    console.log(chalk.red('Error:'), chalk.white(`Path is not a directory`))
    process.exit(1)
  }
}
