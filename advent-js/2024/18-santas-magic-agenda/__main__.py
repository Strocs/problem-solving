import re


def find_in_agenda(agenda, phone):
    agenda_arr = agenda.split("\n")
    result = None

    for agen in agenda_arr:
        if phone not in agen:
            continue
        if result:
            return None

        name = re.search(r"(?<=<)[A-Za-z\s]+(?=>)", agen).group(0)
        full_phone = re.search(
            r"\+([0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{3,4})", agen
        ).group(0)
        address = (
            agen.replace(name, "")
            .replace("<", "")
            .replace(">", "")
            .replace(full_phone, "")
            .strip()
        )

        result = {"name": name, "address": address}

    return result
