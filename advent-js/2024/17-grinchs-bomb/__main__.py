def detect_bombs(grid):
    b = [[0 for _ in range(len(grid[0]))] for _ in range(len(grid))]
    A = [[-1, 0], [1, 0], [0, -1], [0, 1], [1, 1], [-1, -1], [-1, 1], [1, -1]]

    def s(x, y):
        for a in A:
            nx, ny = x + a[0], y + a[1]
            if 0 <= nx < len(grid) and 0 <= ny < len(grid[0]):
                b[nx][ny] += 1

    for x in range(len(grid)):
        for y in range(len(grid[x])):
            if grid[x][y]:
                s(x, y)
    return b
