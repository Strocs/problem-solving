/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let current = 0
  let i = 0
  const rules = {
    '+': () => { current++ },
    '-': () => { current-- },
    '>': () => { },
    '{': (idx) => {
      const isExecutable = current !== 0
      let j = idx + 1
      while (code[j] !== '}') {
        if (isExecutable) j = rules[code[j]](j, j) ?? j
        j++
      }
      return j
    },
    '[': function loop(idx, base) {
      let j = idx + 1
      const isClosed = code[j] === ']'
      if (isClosed && current === 0) return j
      loop(isClosed ? base : rules[code[j]](j, base) ?? j, base)

      // for (let j = idx + 1; j < code.length; j++) {
      //   if (code[j] === "]") {
      //     if (current === 0) return j
      //     j = idx
      //     continue
      //   }
      //   j = rules[code[j]](j) ?? j
      // }
    }
  }
  while (i < code.length) {
    i = rules[code[i]](i, i) ?? i
    i++
  }
  return current
}


console.log(execute('+++')) // 3
console.log(execute('+--')) // -1
console.log(execute('>+++[-]')) // 0
console.log(execute('>>>+{++}')) // 3
console.log(execute('+{[-]+}+')) // 2
console.log(execute('{+}{+}{+}')) // 0
console.log(execute('------[+]++')) // 2
console.log(execute('-[++{-}]+{++++}')) // 5

