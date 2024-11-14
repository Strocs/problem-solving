function maxDistance(movements) {
  let distance = 0
  let comodin = 0
  for (let movement of movements) {
    if (movement === '*') {
      comodin++
      continue
    }
    distance += movement === '>' ? 1 : -1
  }
  return Math.abs(distance) + comodin
}

export default maxDistance
