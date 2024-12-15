function cyberReindeer(road, time) {
  let result = [road]
  result[0] = road
  road = road.replace('S', '.')
  let index = 1
  while (result.length < time) {
    const len = result.length - 1
    if (road[index] === '|') {
      if (len <= 5) {
        result.push(result[len])
        continue
      }
      road = road.replaceAll('|', '*')
    }
    let path = road.split('')
    path[index] = 'S'
    result.push(path.join(''))
    index++
  }

  return result
}


export default cyberReindeer
