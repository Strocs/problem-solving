def fix_gift_list(received, expected):
    i = 0
    while i < len(expected):
        if expected[i] in received:
            r_idx = received.index(expected[i])
            received.pop(r_idx)
            expected.pop(i)
        else:
            i += 1

    def sort_by_qty(acc, curr):
        if curr in acc:
            acc[curr] += 1
        else:
            acc[curr] = 1
        return acc

    missing = {}
    for item in expected:
        missing = sort_by_qty(missing, item)

    extra = {}
    for item in received:
        extra = sort_by_qty(extra, item)

    return {
        "missing": missing,
        "extra": extra,
    }
