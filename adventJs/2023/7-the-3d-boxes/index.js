function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  let border = '#'
  let vertex = border.repeat(size)
  let spaces = size - 1

  let box = ' '.repeat(size - 1) + vertex + '\n'

  for (let i = 1; i < size; i++) {
    if (spaces > 0) spaces--
    let topFace = border + symbol.repeat() + border

  }
  return box
}

export { drawGift } 
