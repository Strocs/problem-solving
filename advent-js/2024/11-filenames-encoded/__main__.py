import re


def decode_filename(filename: str) -> str:
    return re.findall(r"(?<=_)[a-zA-Z0-9_-]+\.[a-z]{2,4}", filename)[0]


print(decode_filename("2023122512345678_sleighDesign.png.grinchwa"))
# ➞ "sleighDesign.png"

print(decode_filename("42_chimney_dimensions.pdf.hack2023"))
# ➞ "chimney_dimensions.pdf"

print(decode_filename("987654321_elf-roster.csv.tempfile"))
# ➞ "elf-roster.csv"
