function escapePyramidHead(room) {
  const roomSize = room.length - 1
  const validMoves = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  let pyramidHead = { x: null, y: null }
  let james = { x: null, y: null }

  const canMove = (row, col) => {
    return (
      row >= 0
      && row <= roomSize
      && col >= 0
      && col <= roomSize
      && room[row][col] !== '#'
    )
  }

  const getHeuristic = (row, col) => {
    return Math.abs(row - james.x) + Math.abs(col - james.y)
  }

  for (let row = 0; row <= roomSize; row++) {
    if (pyramidHead.x && james.x) break

    let pyramidCol = room[row].indexOf('▲')
    let jamesCol = room[row].indexOf('T')

    if (pyramidCol !== -1) {
      pyramidHead.x = row
      pyramidHead.y = pyramidCol
      room[row][pyramidCol] = 0
    }

    if (jamesCol !== -1) {
      let isSafe = true
      for (const [x, y] of validMoves) {
        if (!isSafe) break
        isSafe = isSafe && !canMove(row + x, jamesCol + y)
      }
      if (isSafe) return -1
      james.x = row
      james.y = jamesCol
    }
  }

  let queue = [
    [
      pyramidHead.x,
      pyramidHead.y,
      0,
      getHeuristic(pyramidHead.x, pyramidHead.y)
    ]
  ]

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();
    if (row === james.x && col === james.y) return distance
    const steps = distance + 1

    for (const [x, y] of validMoves) {
      const neighborRow = row + x
      const neighborCol = col + y

      if (!canMove(neighborRow, neighborCol)) continue
      if (typeof room[neighborRow][neighborCol] !== 'Number') {
        room[neighborRow][neighborCol] = Infinity
      }
      if (steps >= room[neighborRow][neighborCol]) continue


      const weight = getHeuristic(neighborRow, neighborCol) + steps
      room[neighborRow][neighborCol] = steps
      const newPosition = [neighborRow, neighborCol, steps, weight]

      !!queue.length && weight > queue[0][3]
        ? queue.push(newPosition)
        : queue.unshift(newPosition)
    }
  }
  return -1
}

export default escapePyramidHead
