def draw_race(indices: list[int], length: int):
    result = ""
    index = len(indices) - 1
    racer_position = 1
    for pos in indices:
        spaces = " " * index
        race_path = "~" * length
        jump_line = "\n" if spaces != "" else ""
        if pos != 0:
            final_path = race_path[pos + 1 :] if pos != -1 else ""
            race_path = race_path[:pos] + "r" + final_path
        result += spaces + race_path + f" /{racer_position}" + jump_line
        racer_position += 1
        index -= 1
    return result
