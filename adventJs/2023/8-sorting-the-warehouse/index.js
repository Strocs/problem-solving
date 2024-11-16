function organizeGifts(gifts) {
  const isGift = /[a-z]/g
  let ammount = ''
  let warehouse = ''
  for (const gif of gifts) {
    if (gif.match(isGift)) {
      let box = Math.floor(+ammount / 10)
      let pallet = Math.floor(box / 5)
      let bag = +ammount - box * 10
      box -= pallet * 5
      const pallets = `[${gif}]`.repeat(pallet)
      const boxes = `{${gif}}`.repeat(box)
      const bags = bag > 0 ? `(${gif.repeat(bag)})` : ''
      warehouse += pallets + boxes + bags
      ammount = 0
      continue
    }
    ammount += gif
  }
  return warehouse
}

export { organizeGifts }
