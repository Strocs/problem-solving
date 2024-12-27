type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  let results: number[] = [];
  let pairing = new Map();
  for (let shoe of shoes) {
    const { type, size } = shoe;
    if (!pairing.has(size)) {
      pairing.set(size, { need: 1, pair: type });
    } else if (pairing.get(size)["pair"] !== type) {
      results.push(size);
      --pairing.get(size)["need"];
      if (pairing.get(size)["need"] === 0) {
        pairing.delete(size);
      }
    } else {
      ++pairing.get(size)["need"];
    }
  }
  return results;
}
