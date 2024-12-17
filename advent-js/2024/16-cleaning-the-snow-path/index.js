/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  let result = "";
  for (const c of s) {
    if (c == result.at(-1)) {
      result = result.slice(0, -1);
    } else {
      result += c;
    }
  }
  return result;
}
