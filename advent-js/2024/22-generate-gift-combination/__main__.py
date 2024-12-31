def generate_gift_sets(gifts):
    if len(gifts) < 1:
        return []

    first, *rest = gifts
    combinations = generate_gift_sets(rest)
    length_group = {}

    for combination in combinations:
        new_combination = [first] + combination
        length_group.setdefault(len(new_combination), []).append(new_combination)

    for length, group in sorted(length_group.items()):
        index = next(
            (i for i, combo in enumerate(combinations) if len(combo) == length),
            len(combinations),
        )
        combinations[index:index] = group

    return [[first]] + combinations
