def in_box(box: list[str]):
    for i in range(1, len(box) - 1):
        gift = box[i].find("*")
        if gift > 0 and gift < len(box[i]) - 1:
            return True
    return False
