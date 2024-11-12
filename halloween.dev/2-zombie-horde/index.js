function battleHorde(zombies, humans) {
  let singleBattleResult = 0
  for (let index = 0; index < zombies.length; index++) {
    singleBattleResult += zombies[index] - humans[index]
  }
  if (singleBattleResult === 0) return 'x'
  return `${Math.abs(singleBattleResult)}${singleBattleResult > 0 ? 'z' : 'h'}`
}

export default battleHorde
