/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
  return !tree
    ? 0
    : Math.max(treeHeight(tree.left), treeHeight(tree.right)) + 1;
}
