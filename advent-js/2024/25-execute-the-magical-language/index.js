/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let c = 0,
    i = 0,
    q = true,
    t = 0
  const e = {
    '>': () => { },
    '+': () => c += q,
    '-': () => c -= q,
    '{': (x) => q = x,
    '}': () => q = true,
    '[': (x) => { q = x; t = i },
    ']': (x) => x ? i = t : q = true
  }
  while (i < code.length) {
    e[code[i]](c !== 0)
    i++
  }
  return c
}
