function createChristmasTree(ornaments, height) {
  const lineJump = '\n'
  const trunk = ' '.repeat(height - 1) + '|' + lineJump
  let tree = ''
  for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(height - i)
    let line = ''
    for (let j = 0; j < i; j++) {
      const el = ornaments[0]
      ornaments = ornaments.slice(1) + el
      line += el + ' '
    }
    tree += spaces + line.trim() + lineJump
  }
  return tree + trunk
}

export { createChristmasTree }
