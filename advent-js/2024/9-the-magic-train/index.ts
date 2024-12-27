type Space = "·" | "@" | "*" | "o";
type Board = Space[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  let pos: number[] | null = null;
  const cases = {
    "*": "eat",
    "·": "none",
    o: "crash",
  };
  const movements = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  for (let i = 0; i < board.length; i++) {
    const find = board[i].indexOf("@");
    if (find >= 0) {
      pos = [i + movements[mov][0], find + movements[mov][1]];
    }
  }
  try {
    return cases[board[pos![0]][pos![1]]];
  } catch {
    return "crash";
  }
}
