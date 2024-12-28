def tree_height(tree):
    return 0 if not tree else max(tree_height(tree.left), tree_height(tree.right)) + 1
