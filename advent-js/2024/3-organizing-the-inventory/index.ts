type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  let result = {};
  for (let items of inventory) {
    const { name, quantity, category } = items;
    const exists = result[category];
    const prevQty =
      exists !== undefined && exists[name] !== undefined ? exists[name] : 0;
    result[category] = { ...result[category], [name]: prevQty + quantity };
  }
  return result;
}
