function distributeWeight(weight: number): string {
  const boxes = {
    1: [1, 0],
    2: [3, 0],
    5: [5, 1],
    10: [9, 1],
  };

  let boxStack = "";
  let totalWidth = 0;

  for (const boxType of Object.keys(boxes).reverse()) {
    const qty = Math.floor(weight / +boxType);
    if (qty === 0) continue;

    const [w, h] = boxes[boxType];
    const remainingSpace = totalWidth ? "_".repeat(totalWidth - w - 1) : "";

    totalWidth = w;

    let mid = ("\n" + "|" + " ".repeat(w) + "|").repeat(h);
    let bottom = "\n" + "|" + "_".repeat(w) + "|" + remainingSpace;
    let box = mid + bottom;

    for (let i = 1; i < qty; i++) {
      bottom = "\n" + "|" + "_".repeat(w) + "|";
      box = mid + bottom + box;
    }

    boxStack = box + boxStack;

    weight -= +boxType * qty;
  }

  boxStack = " " + "_".repeat(totalWidth) + " " + boxStack;

  return boxStack;
}
