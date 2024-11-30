function prepareGifts(gifts) {
  const unique = new Set(gifts)
  return [...unique].sort((a, b) => a - b)
}

