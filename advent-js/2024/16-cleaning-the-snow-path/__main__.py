def remove_snow(s: str) -> str:
    i = 0
    while i < len(s):
        if s.count(s[i]) > 1:
            s = s.replace(s[i], "", 2)
            i = 0
        i += 1
    return s
