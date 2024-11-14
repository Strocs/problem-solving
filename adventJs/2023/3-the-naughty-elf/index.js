function findNaughtyStep(original, modified) {
  const isAdded = modified.length > original.length
  const largest = isAdded ? modified : original
  for (let i = 0; i < largest.length; i++) {
    if (original[i] !== modified[i]) return largest[i]
  }
  return ''
}

export default findNaughtyStep
