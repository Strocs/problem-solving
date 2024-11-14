input = open("log.txt").read().split()


def isValid(password):
    last_char = 0
    for char in password:
        char = ord(char)
        is_invalid = char < 48 or char > 57 and char < 97 or char > 122
        if is_invalid or char < last_char:
            return False
        last_char = char
    return True


result = {True: 0, False: 0}
for key in input:
    result[isValid(key)] += 1

print(f"{result[True]}true{result[False]}false")
