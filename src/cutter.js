const cutter = (p, fat) => {
  try {
    const trimmed = p.split(fat)
    return trimmed.length === 2 ? trimmed[1] : trimmed[0]
  } catch (e) {
    console.log('trim error: ', e)
  }
}

module.exports = cutter
