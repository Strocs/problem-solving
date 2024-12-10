/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let result = ''
  let index = indices.length - 1
  for (let i = 0; i < indices.length; i++) {
    const spaces = ' '.repeat(index - i)
    let racePath = '~'.repeat(length)
    let jumpLine = i === index ? "" : '\n'
    if (indices[i] !== 0) {
      const location = indices[i] > 0 ? indices[i] : length + indices[i]
      racePath = racePath.substring(0, location) + 'r' + racePath.substring(location + 1)
    }
    result += spaces + racePath + ` /${i + 1}` + jumpLine
  }
  return result
}

