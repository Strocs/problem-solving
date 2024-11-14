def getPassword(initial, movements):
    position = 0
    length = len(initial) - 1
    for movement in movements:
        letter = int(initial[position])
        match movement:
            case "U":
                letter = letter + 1 if int(letter) < 9 else 0
                initial = initial[:position] + str(letter) + initial[position + 1 :]
            case "D":
                letter = letter - 1 if int(letter) > 0 else 9
                initial = initial[:position] + str(letter) + initial[position + 1 :]
            case "R":
                position = position + 1 if position < length else 0
            case "L":
                position = position - 1 if position > 0 else length

    return initial


# print(getPassword("000", "URURD"), 119)
#
# print(getPassword("1111", "UUURUUU"), 4411)
#
# print(getPassword("9999", "LULULULD"), 8000)

print(getPassword("528934712834", "URDURUDRUDLLLLUUDDUDUDUDLLRRRR"))
