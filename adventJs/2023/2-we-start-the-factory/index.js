function manufacture(gifts, materials) {
  for (let i = 0; i < gifts.length; i++) {
    for (const giftMaterial of gifts[i]) {
      console.log(gifts[i], giftMaterial)
      if (!materials.includes(giftMaterial)) {
        gifts.splice(i, 1)
        i--
        break
      }
    }
  }
  return gifts
}


export default manufacture
