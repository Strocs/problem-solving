function isRobotBack(moves: string[]): true | [number, number] {
  const movements = {
    R: { reverse: "L", x: 1 },
    L: { reverse: "R", x: -1 },
    U: { reverse: "D", y: 1 },
    D: { reverse: "U", y: -1 },
  };

  const modifiers = {
    "*": (c: number) => c * 2,
    "!": (c: number) => c * -1,
    "?": (c: number, m: never) => (lastMove.has(m) ? 0 : c),
    null: (x: number) => x,
  };

  let { cx, cy } = { cx: 0, cy: 0 };
  let modifier = null;
  let lastMove = new Set([]);

  for (let char of moves) {
    const movement = movements[char];

    if (!movement) {
      modifier = char;
      continue;
    }

    const { reverse, x, y } = movement;

    cx += modifiers[modifier](x ?? 0, char);
    cy += modifiers[modifier](y ?? 0, char);

    lastMove.add(modifier === "!" ? reverse : char);
    modifier = null;
  }
  return (!cx && !cy) || [cx, cy];
}
