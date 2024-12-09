def organizeShoes(shoes: list[dict[str, str | int]]) -> list[int]:
    results = []
    pairing = {}
    for shoe in shoes:
        side, size = shoe.values()
        if not pairing.get(size):
            pairing[size] = {"need": 1, "pair": side}
        elif pairing[size]["pair"] != side:
            results = [*results, size]
            pairing[size]["need"] -= 1
            if pairing[size]["need"] == 0:
                pairing.__delitem__(size)
        else:
            pairing[size]["need"] += 1
    return results
