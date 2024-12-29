function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  if (!tree1?.left) return [tree1?.value === tree2?.value, tree1!.value]
  return [
    tree1.value === tree2?.value &&
    isTreesSynchronized(tree1.left, tree2.right)[0],
    tree1.value
  ]
}

