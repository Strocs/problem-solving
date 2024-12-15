import { describe, test, expect } from 'bun:test'
import { drawGift } from '.'

describe('the-3d-boxes', () => {
  test('1', () => {
    const result = typeof drawGift(4, "+")
    expect(result).toBeString('string')
  })

  test('2', () => {
    const result = drawGift(4, "+")
    const expected = '   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n'
    expect(result).toBe(expected)
  })

  test('3', () => {
    const result = drawGift(5, "*")
    const expected = "    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n"
    expect(result).toBe(expected)
  })

  test('4', () => {
    const result = drawGift(1, "^")
    const expected = "#\n"
    expect(result).toBe(expected)
  })

  test('5', () => {
    const result = drawGift(2, "&")
    const expected = " ##\n###\n##\n"
    expect(result).toBe(expected)
  })

  test('6', () => {
    const result = drawGift(10, "%")
    const expected = "         ##########\n        #%%%%%%%%##\n       #%%%%%%%%#%#\n      #%%%%%%%%#%%#\n     #%%%%%%%%#%%%#\n    #%%%%%%%%#%%%%#\n   #%%%%%%%%#%%%%%#\n  #%%%%%%%%#%%%%%%#\n #%%%%%%%%#%%%%%%%#\n##########%%%%%%%%#\n#%%%%%%%%#%%%%%%%#\n#%%%%%%%%#%%%%%%#\n#%%%%%%%%#%%%%%#\n#%%%%%%%%#%%%%#\n#%%%%%%%%#%%%#\n#%%%%%%%%#%%#\n#%%%%%%%%#%#\n#%%%%%%%%##\n##########\n"
    expect(result).toBe(expected)
  })
})
