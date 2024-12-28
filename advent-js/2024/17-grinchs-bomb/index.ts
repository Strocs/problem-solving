function detectBombs(grid: boolean[][]): number[][] {
  const result = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0),
  );

  const adjacents = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ];

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y]) {
        for (const [dx, dy] of adjacents) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length) {
            result[nx][ny]++;
          }
        }
      }
    }
  }

  return result;
}
