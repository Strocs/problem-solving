/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  let registry = {}
  let index = 0

  const createReg = (reg) => { if (registry[reg] === undefined) registry[reg] = 0 }

  const actions = {
    'MOV': ([value, reg]) => {
      createReg(reg)
      isNaN(value) ? registry[reg] = registry[value] : registry[reg] = +value
      index++
    },
    'INC': ([reg]) => {
      createReg(reg)
      registry[reg] += 1
      index++
    },
    'DEC': ([reg]) => {
      createReg(reg)
      registry[reg] -= 1
      index++
    },
    'JMP': ([reg, jump]) => {
      createReg(reg)
      registry[reg] === 0 ? index = +jump : index++
    }
  }

  while (index < instructions.length) {
    const [action, ...instruction] = instructions[index].split(' ')
    actions[action](instruction)
  }

  return registry['A']
}
