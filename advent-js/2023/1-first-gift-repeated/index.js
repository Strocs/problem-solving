function findFirstRepeated(gifts) {
  let repeatedControl = new Set()
  for (let i = 0; i < gifts.length; i++) {
    if (repeatedControl.has(gifts[i])) {
      return gifts[i]
    }
    repeatedControl.add(gifts[i])
  }
  return -1
}


export default findFirstRepeated;
