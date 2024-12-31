/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  let b = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => 0),
  );

  const A = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ];

  const s = (x, y) => {
    for (const a of A) {
      x += a[0];
      y += a[1];

      if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
        b[x][y] += 1;
      }
    }
  };

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      grid[x][y] && s(x, y);
    }
  }

  return b;
}
