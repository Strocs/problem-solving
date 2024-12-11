/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  return filename.match(/(?<=_)[a-zA-Z0-9_-]+\.[a-z]{2,4}/g)[0]
}

