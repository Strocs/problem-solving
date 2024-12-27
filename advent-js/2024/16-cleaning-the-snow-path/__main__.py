def remove_snow(s: str) -> str:
    result = ""
    for c in s:
        last = result[-1] == c if len(result) > 0 else False
        result = result.replace(c, "") if last else result + c
    return result
