def is_trees_synchronized(tree1, tree2):
    if not tree1.left:
        return [tree1.value == tree2.value, tree1.value]
    return [
        tree1.value == tree2.value
        and is_trees_synchronized(tree1.left, tree2.right)[0],
        tree1.value,
    ]
