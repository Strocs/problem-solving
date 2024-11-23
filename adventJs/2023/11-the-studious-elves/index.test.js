import { describe, test, expect } from 'bun:test'
import { getIndexsForPalindrome } from '.'


describe('the-studious-elves', () => {
  test('1', () => {
    const result = getIndexsForPalindrome('anna')
    expect(result).toBeInstanceOf(Array)
  })

  test('2', () => {

    const result = getIndexsForPalindrome('anna')
    expect(result).toStrictEqual([])
  })

  test('3', () => {

    const result = getIndexsForPalindrome('abab')
    expect(result).toStrictEqual([0, 1])
  })

  test('4', () => {

    const result = getIndexsForPalindrome('abac')
    expect(result).toStrictEqual(null)
  })

  test('5', () => {

    const result = getIndexsForPalindrome('aaaaaaaa')
    expect(result).toStrictEqual([])
  })

  test('6', () => {

    const result = getIndexsForPalindrome('aaababa')
    expect(result).toStrictEqual([1, 3])
  })

  test('7', () => {

    const result = getIndexsForPalindrome('caababa')
    expect(result).toStrictEqual(null)
  })

  test('8', () => {

    const result = getIndexsForPalindrome('rotavator')
    expect(result).toStrictEqual([])
  })

  test('9', () => {

    const result = getIndexsForPalindrome('rotaratov')
    expect(result).toStrictEqual([4, 8])
  })

  test('10', () => {
    const result = getIndexsForPalindrome('saippuakivikauppias')
    expect(result).toStrictEqual([])
  })
})
