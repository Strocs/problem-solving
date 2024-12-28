def distribute_weight(weight: int) -> str:
    boxes = {
        "10": [9, 1],
        "5": [5, 1],
        "2": [3, 0],
        "1": [1, 0],
    }

    box_stack = ""
    total_width = 0
    for box_type in boxes.keys():
        qty = int((weight / int(box_type)))
        if qty == 0:
            continue

        w, h = boxes[box_type]

        remaining_space = "_" * (total_width - w - 1) if total_width else ""
        total_width = w
        mid = ("\n" + "|" + (" " * w) + "|") * h
        bottom = "\n" + "|" + ("_" * w) + "|" + remaining_space
        box = mid + bottom

        for i in range(qty - 1):
            bottom = "\n" + "|" + ("_" * w) + "|"
            box = mid + bottom + box

        box_stack = box + box_stack
        weight -= int(box_type) * qty

    box_stack = " " + ("_" * total_width) + " " + box_stack
    return box_stack
