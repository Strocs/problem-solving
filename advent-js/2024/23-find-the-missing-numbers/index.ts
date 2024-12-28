function findMissingNumbers(nums: number[]): number[] {
  nums.sort()
  let result: number[] = []
  for (let i = 1; i <= nums.at(-1)!; i++) {
    if (!nums.includes(i)) result.push(i)
  }
  return result
}

