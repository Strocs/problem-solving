function fixGiftList(
  received: string[],
  expected: string[],
): { missing: Record<string, number>; extra: Record<string, number> } {
  for (let i = 0; i < expected.length; i++) {
    const rIdx = received.indexOf(expected[i]);
    if (rIdx < 0) continue;
    received.splice(rIdx, 1);
    expected.splice(i, 1);
    i--;
  }

  const sortByQty = (acc: {}, curr: string) => {
    return {
      ...acc,
      [curr]: acc[curr] !== undefined ? acc[curr] + 1 : 1,
    };
  };

  return {
    missing: expected.reduce(sortByQty, {}),
    extra: received.reduce(sortByQty, {}),
  };
}
