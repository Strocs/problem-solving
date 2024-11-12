function findSafestPath(dream) {
  const rows = dream.length
  const cols = dream[0].length
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col === 0) continue
      if (row === 0 || col === 0) {
        dream[row][col] += row === 0 ? dream[row][col - 1] : dream[row - 1][col]
        continue
      }

      dream[row][col] += Math.min(dream[row][col - 1], dream[row - 1][col])
    }
  }
  return dream[rows - 1][cols - 1]
}

export default findSafestPath
