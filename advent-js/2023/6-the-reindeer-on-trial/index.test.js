import { describe, test, expect } from 'bun:test'
import maxDistance from '.'

describe('the-raindeer-on-trial', () => {
  test('number', () => {
    const result = typeof maxDistance('<<<>')
    expect(result).toBe('number')
  })
  test('1', () => {
    const result = maxDistance("<<<>")
    expect(result).toBe(2)
  })

  test('2', () => {
    const result = maxDistance(">>*<")
    expect(result).toBe(2)
  })

  test('3', () => {
    const result = maxDistance("<<<<<")
    expect(result).toBe(5)
  })

  test('4', () => {
    const result = maxDistance(">***>")
    expect(result).toBe(5)
  })

  test('5', () => {
    const result = maxDistance("**********")
    expect(result).toBe(10)
  })

  test('6', () => {
    const result = maxDistance("<<**>>")
    expect(result).toBe(2)
  })

  test('7', () => {
    const result = maxDistance("*<<<")
    expect(result).toBe(4)
  })
})
