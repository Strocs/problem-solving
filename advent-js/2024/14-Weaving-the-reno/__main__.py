def min_moves_to_stables(reindeer, stables):
    reindeer.sort()
    stables.sort()
    acc = 0
    for idx in range(stables):
        acc += abs(stables[idx] - reindeer[idx])
    return acc
