# Sólo usa letras minúsculas y dígitos.
# Nunca usa dígitos después de una letra (Una vez aparecen letras, la contraseña debe continuar solo con letras)
# Si usa dígitos, siempre los usa de forma creciente (si sale un 3, ya no usará después un número menor)
# Si usa letras, siempre las usa en orden alfabético creciente (si sale una "b" ya no podrá usar una "a", por ejemplo)

# 1234     -> true
# abc      -> true
# a123     -> false (un número después de una letra)
# 123abc   -> true
# dbce     -> false (una "d" y después una "b")

input = open("log.txt").read().split()

result = {True: 0, False: 0}


def detectAccess(intent):
    only_letters = False
    bigger_number = 0
    bigger_letter = 97
    access = True
    for char in intent:
        if char.isalpha():
            ascii = ord(char)
            if ascii < 97 or ascii > 122 or ascii < bigger_letter:
                access = False
                break
            only_letters = True
            bigger_letter = ascii
        if char.isdigit():
            num = int(char)
            if only_letters or num < bigger_number:
                access = False
                break
            bigger_number = int(char)
    return access


# def detectAccess(intent):
#     only_letters = False
#     bigger_number = 0
#     bigger_letter = 97
#     access = True
#     for char in intent:
#         if char.isalpha():
#             ascii = ord(char)
#             if (
#                 ascii < 97
#                 or ascii > 122
#                 or bigger_letter > 0
#                 and ascii < bigger_letter
#                 or ascii > bigger_letter + 1
#             ):
#                 access = False
#                 break
#             only_letters = True
#             bigger_letter = ascii
#         if char.isdigit():
#             num = int(char)
#             if only_letters or num < bigger_number or num > bigger_number + 1:
#                 access = False
#                 break
#             bigger_number = num
#     return access


log = {True: [], False: []}

for key in input:
    accepted = detectAccess(key)
    result[accepted] += 1
    log[accepted].append(key)


print(f"{result[True]}true{result[False]}false")
