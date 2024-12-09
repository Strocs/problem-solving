/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */

function organizeShoes(shoes) {
  let results = []
  let pairing = new Map()
  for (let shoe of shoes) {
    const { type, size } = shoe
    if (!pairing.has(size)) {
      pairing.set(size, { need: 1, pair: type })
    }
    else if (pairing.get(size)['pair'] !== type) {
      results.push(size)
      --pairing.get(size)['need']
      if (pairing.get(size)['need'] === 0) {
        pairing.delete(size)
      }
    } else {
      ++pairing.get(size)['need']
    }
  }
  return results
}

