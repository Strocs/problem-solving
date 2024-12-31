def draw_table(data: list[dict[str, str | int]]) -> str:
    width = [0] * len(data[0])
    c = [[]]
    for r in range(len(data)):
        d = [*data[r].items()]
        t = []
        for i in range(len(d)):
            h, b = d[i]
            if r == 0:
                c[0].append(h[0].upper() + h[1:])
            t.append(str(b))
            l = len(h) if len(h) > len(str(b)) else len(str(b))
            z = width[i] if len(width) > i else 0
            width.insert(i, z if z > l else l)
        c.append(t)

    t = ""
    hs = ""
    for i in range(len(c)):
        s = ""
        h = ""
        for j in range(len(c[i])):
            h += "+" + ("-" * (width[j] + 2))
            s += "| " + c[i][j] + (" " * (width[j] - len(c[i][j]) + 1))
        h += "+"
        s += "|\n"
        if not hs:
            hs = h
            t += hs + "\n" + s + hs + "\n"
            continue
        t += s
    t += hs

    return t
