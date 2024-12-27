/** @param {string[]} moves
 * @returns {true|string[]} Return true if robot returns or position
 */
function isRobotBack(moves) {

  const movements = {
    'R': { reverse: 'L', x: 1 },
    'L': { reverse: 'R', x: -1 },
    'U': { reverse: 'D', y: 1 },
    'D': { reverse: 'U', y: -1 }
  };

  const modifiers = {
    '*': (c) => c * 2,
    '!': (c) => c * -1,
    '?': (c, m) => lastMove.has(m) ? 0 : c,
    null: x => x
  }

  let { cx, cy } = { cx: 0, cy: 0 }
  let modifier = null

  for (let char of moves) {
    const movement = movements[char]

    if (!movement) {
      modifier = char
      continue
    }

    const { reverse, x, y } = movement

    cx += modifiers[modifier](x ?? 0, char)
    cy += modifiers[modifier](y ?? 0, char)

    lastMove.add(modifier === '!' ? reverse : char)
    modifier = null
  }
  return !cx && !cy || [cx, cy]
}
