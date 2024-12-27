def is_robot_back(moves: str) -> bool | list[int]:
    movements = {
        "R": {"reverse": "L", "x": 1},
        "L": {"reverse": "R", "x": -1},
        "U": {"reverse": "D", "y": 1},
        "D": {"reverse": "U", "y": -1},
    }

    modifiers = {
        "*": lambda c, _: c * 2,
        "!": lambda c, _: c * -1,
        "?": lambda c, m: 0 if m in lastMove else c,
        "none": lambda x, _: x,
    }

    keys = modifiers.keys()

    cx = 0
    cy = 0
    modifier = "none"
    lastMove = set()

    for char in moves:
        if char in keys:
            modifier = char
            continue

        movement = movements[char]

        r, v = movement.keys()
        reverse, n = movement[r], movement[v]

        cx += modifiers[modifier](n if v == "x" else 0, char)
        cy += modifiers[modifier](n if v == "y" else 0, char)

        lastMove.add(reverse if modifier == "!" else char)
        modifier = "none"

    return (not cx and not cy) or [cx, cy]
