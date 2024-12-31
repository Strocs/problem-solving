def execute(code: str) -> int:
    s = {
        "c": 0,
        "i": 0,
        "t": 0,
        "q": 1,
    }
    e = {
        ">": lambda x: None,
        "+": lambda x: s.update({"c": s["c"] + s["q"]}),
        "-": lambda x: s.update({"c": s["c"] - s["q"]}),
        "{": lambda x: s.update({"q": 1 if x else 0}),
        "}": lambda x: s.update({"q": 1}),
        "[": lambda x: s.update({"q": 1 if x else 0, "t": s["i"]}),
        "]": lambda x: s.update({"i": s["t"]} if x else {"q": 1}),
    }
    while s["i"] < len(code):
        e[code[s["i"]]](s["c"] != 0)
        s["i"] += 1
    return s["c"]
