function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  const factor = size - 2
  const border = '#'
  let margin = size - 1
  const vertex = border.repeat(size)
  const lineJump = '\n'
  const middleVertex = vertex + symbol.repeat(factor) + border + lineJump
  const topVertex = ' '.repeat(margin) + vertex + lineJump
  const botVertex = vertex
  let topMiddle = ''
  let botMiddle = ''
  for (let i = 0; i < factor; i++) {
    if (margin > 0) margin--
    const space = ' '.repeat(margin)
    const topFace = border + symbol.repeat(factor) + border
    const upperRightFace = symbol.repeat(i) + border
    const bottomRightFace = symbol.repeat(factor - i - 1) + border
    topMiddle += space + topFace + upperRightFace + lineJump
    botMiddle += topFace + bottomRightFace + lineJump
  }
  let box =
    topVertex +
    topMiddle +
    middleVertex +
    botMiddle +
    botVertex +
    lineJump
  return box
}

export { drawGift }
