function calculatePrice(ornaments: string): number | undefined {
  if (!/^[*o^#@]*$/.test(ornaments)) return undefined;
  const values = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  return ornaments.split("").reduce((acc, item, i) => {
    const value = values[item];
    return value < values[ornaments[i + 1]] ? acc - value : acc + value;
  }, 0);
}
