def createFrame(names):
    width_of_box = len(names.sort(reverse=True, key=len)[0])
    box = f'{"*" * (width_of_box + 4)}\n'
    for name in names:
        box += f"* {name}{width_of_box - len(name)} *\n"
    box += f'{"*" * (width_of_box + 4)}'
    return box
