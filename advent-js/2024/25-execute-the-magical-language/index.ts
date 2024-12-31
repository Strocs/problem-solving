function execute(code: string): number {
  let c = 0,
    i = 0,
    q = true,
    t = 0
  const e = {
    '>': () => { },
    '+': () => c += +q,
    '-': () => c -= +q,
    '{': (x: boolean) => q = x,
    '}': () => q = true,
    '[': (x: boolean) => { q = x; t = i },
    ']': (x: boolean) => x ? i = t : q = true
  }
  while (i < code.length) {
    e[code[i]](c !== 0)
    i++
  }
  return c
}
