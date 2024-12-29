/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let current = 0
  let i = 0
  while (i < code.length) {
    const c = code[i]
    if (c === "+") current++
    if (c === '-') current--
    if (c === '{') {
      for (let j = i + 1; j < code.length - 1; j++) {
        if (current === '}') break
        if (current === 0) {
          if (code[j] !== '}') continue
          i = j
          break
        }
        if (code[j] === "+") current++
        if (code[j] === '-') current--
      }
    }

    if (c === '[') {
      for (let j = i + 1; j < code.length; j++) {
        if (current === 0) {
          if (code[j] !== ']') continue
          i = j
          break
        }
        if (code[j] === "+") current++
        if (code[j] === '-') current--
        if (code[j] === ']') {
          j = i
        }
      }
    }
    i++ // i = 7
  }
  return current
}

// console.log(execute('+++')) // 3
// console.log(execute('+--')) // -1
console.log(execute('>+++{-}')) // 0
// console.log(execute('>>>+{++}')) // 3
// console.log(execute('+{[-]+}+')) // 2
// console.log(execute('{+}{+}{+}')) // 0
// console.log(execute('------[+]++')) // 2
// console.log(execute('-[++{-}]+{++++}')) // 5
