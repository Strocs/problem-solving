function generateGiftSets(gifts: string[]): string[][] {
  if (gifts.length < 1) return []
  let [first, ...rest] = gifts;
  let combinations = generateGiftSets(rest)
  let lengthGroup = new Map()

  for (let i = 0; i < combinations.length; i++) {
    const combination = [first, ...combinations[i]]
    lengthGroup.set(
      combination.length,
      [...lengthGroup.get(combination.length) ?? [], combination]
    )
  }
  for (const item of lengthGroup.keys()) {
    let index = combinations.findIndex((e) => e.length === item)
    if (index < 0) index = combinations.length
    combinations.splice(index, 0, ...lengthGroup.get(item))
  }

  return [[first], ...combinations]
}

