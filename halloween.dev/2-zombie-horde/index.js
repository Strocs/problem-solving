function battleHorde(zombies, humans) {
  let war = 0
  for (let index = 0; index < zombies.length; index++) {
    war += zombies[index] - humans[index]
  }
  if (war === 0) return 'x'
  const letter = war > 0 ? 'z' : 'h'
  const battleResult = Math.abs(war)
  return `${battleResult}${letter}`
}

export default battleHorde
