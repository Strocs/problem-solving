function createFrame(names) {
  const widthOfBox = [...names].sort((a, b) => b.length - a.length)[0].length
  let box = "*".repeat(widthOfBox + 4) + '\n'
  names.forEach(name => box += `* ${name}${' '.repeat(widthOfBox - name.length)} *\n`)
  box += "*".repeat(widthOfBox + 4)
  return box
}
