/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  nums.sort()
  let result = []
  for (let i = 1; i <= nums.at(-1); i++) {
    if (!nums.includes(i)) result.push(i)
  }
  return result
}

