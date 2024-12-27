/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const gift = box[i].indexOf("*");
    if (gift > 0 && gift < box[i].length - 1) {
      return true;
    }
  }
  return false;
}
