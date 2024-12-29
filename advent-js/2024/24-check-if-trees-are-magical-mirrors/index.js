/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  if (!tree1.left) return [tree1.value === tree2.value, tree1.value]
  return [
    tree1.value === tree2.value &&
    isTreesSynchronized(tree1.left, tree2.right)[0],
    tree1.value
  ]
}
