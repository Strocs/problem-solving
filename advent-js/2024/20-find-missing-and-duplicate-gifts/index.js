/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 *
 */
function fixGiftList(received, expected) {
  for (let i = 0; i < expected.length; i++) {
    const rIdx = received.indexOf(expected[i]);
    if (rIdx < 0) continue;
    received.splice(rIdx, 1);
    expected.splice(i, 1);
    i--;
  }

  const sortByQty = (acc, curr) => {
    return {
      ...acc,
      [curr]: acc[curr] !== undefined ? acc[curr] + 1 : 1,
    };
  };

  return {
    missing: expected.reduce(sortByQty, {}),
    extra: received.reduce(sortByQty, {}),
  };
}

const result = fixGiftList([], ["bear", "car", "car"]);

console.log(result);
