function createMagicPotion(potions, target) {
  let storedPotions = {
    [potions[0]]: 0
  }
  for (const potionIndex in potions) {
    const difference = target - potions[potionIndex]
    if (storedPotions[difference] !== undefined) {
      return [storedPotions[difference], +potionIndex]
    }
    storedPotions[potions[potionIndex]] = +potionIndex
  }
}

export default createMagicPotion
