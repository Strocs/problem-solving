import { describe, test, expect } from 'bun:test'
import { organizeGifts } from '.'

describe('sorting-the-warehouse', () => {
  test('1', () => {
    const result = typeof organizeGifts('11a12b')
    expect(result).toBe('string')
  })

  test('2', () => {
    const result = organizeGifts("76a11b")
    expect(result).toBe("[a]{a}{a}(aaaaaa){b}(b)")
  })

  test('3', () => {
    const result = organizeGifts("20a")
    expect(result).toBe("{a}{a}")
  })

  test('4', () => {
    const result = organizeGifts("70b120a4c")
    expect(result).toBe("[b]{b}{b}[a][a]{a}{a}(cccc)")
  })

  test('5', () => {
    const result = organizeGifts("9c")
    expect(result).toBe("(ccccccccc)")
  })

  test('6', () => {
    const result = organizeGifts("19d51e")
    expect(result).toBe("{d}(ddddddddd)[e](e)")
  })
})
