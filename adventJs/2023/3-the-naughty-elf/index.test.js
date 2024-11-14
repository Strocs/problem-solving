import findNaughtyStep from ".";
import { describe, test, expect } from 'bun:test'

describe('findNaughtyElf', () => {
  test('x', () => {
    const result = typeof findNaughtyStep('abcd', 'abcde')
    expect(result).toBe('string')
  })
  test('x', () => {
    const result = findNaughtyStep('abcd', 'abcde')
    expect(result).toBe("e")
  })
  test('x', () => {
    const result = findNaughtyStep('abcde', 'abcd')
    expect(result).toBe("e")
  })
  test('x', () => {
    const result = findNaughtyStep('xxxx', 'xxoxx')
    expect(result).toBe("o")
  })
  test('x', () => {
    const result = findNaughtyStep('stepfor', 'stepor')
    expect(result).toBe("f")
  })
  test('x', () => {
    const result = findNaughtyStep('iiiii', 'iiiii')
    expect(result).toBe("")
  })
})
