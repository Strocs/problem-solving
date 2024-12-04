def organizeInventory(inventory):
    result = {}
    for items in inventory:
        name, quantity, category = items.values()
        cat = result.setdefault(category, {})
        prev_qty = cat.get(name, 0)
        cat[name] = prev_qty + quantity
    return result
