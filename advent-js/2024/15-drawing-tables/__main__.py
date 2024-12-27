def draw_table(data: list[dict[str, str | int]]) -> str:
    w = []
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
            z = w[i] if len(w) > i else 0
            w.insert(i, z if z > l else l)
        c.append(t)

    t = ""
    hs = ""
    for i in range(len(c)):
        s = ""
        h = ""
        for j in range(len(c[i])):
            h += "+" + ("-" * (w[j] + 2))
            s += "| " + c[i][j] + (" " * (w[j] - len(c[i][j]) + 1))
        h += "+"
        s += "|\n"
        if not hs:
            hs = h
            t += hs + "\n" + s + hs + "\n"
            continue
        t += s
    t += hs

    return t
