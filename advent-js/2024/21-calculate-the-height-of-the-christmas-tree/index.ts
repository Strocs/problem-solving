function treeHeight(
  tree: { value: string; left: any; right: any } | null,
): number {
  return !tree
    ? 0
    : Math.max(treeHeight(tree.left), treeHeight(tree.right)) + 1;
}
