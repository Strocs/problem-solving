function minMovesToStables(reindeer, stables) {
  reindeer.sort()
  return stables.sort().reduce((acc, curr, i) => acc + Math.abs(curr - reindeer[i]), 0)
}
