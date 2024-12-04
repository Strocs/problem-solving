def createXmasTree(height: int, ornament: str) -> str:
    if height <= 0:
        return "#\n#"

    space_symbol = "_"
    base = f"{space_symbol * (height - 1)}#{space_symbol * (height - 1)}"
    tree = ""
    tree_width = ((height - 1) * 2) + 1

    for line in range(height):
        spaces = space_symbol * (height - (line + 1))
        ornaments = ornament * (tree_width - (height - (line + 1)) * 2)
        tree += f"{spaces}{ornaments}{spaces}\n"
    return tree + base + "\n" + base


print(createXmasTree(0, "x"))
