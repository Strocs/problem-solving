function createXmasTree(height: number, ornament: string): string {
  if (height <= 0) return "#\n#";
  const spaceSymbol = "_";
  const base = `${spaceSymbol.repeat(height - 1)}#${spaceSymbol.repeat(height - 1)}`;
  const treeWidth = (height - 1) * 2 + 1;
  let tree = "";

  for (let i = 0; i < height; i++) {
    const spaces = spaceSymbol.repeat(height - (i + 1));
    const ornaments = ornament.repeat(treeWidth - (height - (i + 1)) * 2);
    tree += `${spaces}${ornaments}${spaces}\n`;
  }

  return tree + base + "\n" + base;
}
