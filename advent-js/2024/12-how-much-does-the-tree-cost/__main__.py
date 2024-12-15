def calculate_price(ornaments: str) -> int | None:
    values, sum = {"*": 1, "o": 5, "^": 10, "#": 50, "@": 100}, 0
    for i, ornament in enumerate(ornaments):
        current_value = values.get(ornament)
        if current_value is None:
            return None
        o = ornaments[i + 1] if i < len(ornaments) - 1 else "N"
        next_value = values.get(o, 0)
        sum += current_value if current_value >= next_value else -current_value
    return sum
