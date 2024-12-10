from typing import List, Literal


def move_train(
    board: List[str], mov: Literal["U", "D", "R", "L"]
) -> Literal["none", "crash", "eat"]:
    pos = None
    cases = {"*": "eat", "·": "none", "o": "crash"}
    movements = {
        "U": [-1, 0],
        "D": [1, 0],
        "R": [0, 1],
        "L": [0, -1],
    }

    for i, row in enumerate(board):
        find = row.find("@")
        if find >= 0:
            pos = [i + movements[mov][0], find + movements[mov][1]]

    try:
        return cases[board[pos[0]][pos[1]]]
    except ValueError:
        return "crash"
