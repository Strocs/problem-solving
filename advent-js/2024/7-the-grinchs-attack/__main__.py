def fix_packages(packages):
    queue = [""]
    for letter in packages:
        if letter == "(":
            queue.append("")
        elif letter == ")":
            last = queue.pop()[::-1]
            queue[-1] += last
        else:
            queue[-1] += letter
    return queue[0]
