import { describe, expect, test } from 'bun:test'
import { createChristmasTree } from './index.js'

describe('create-your-own-christmas-tree', () => {
  test('1', () => {
    const result = typeof createChristmasTree('x', 3)
    expect(result).toBe('string')
  })

  test('2', () => {
    const result = createChristmasTree('x', 3)
    const expected = "  x\n x x\nx x x\n  |\n"
    expect(result).toBe(expected)
  })

  test('3', () => {
    const result = createChristmasTree("xo", 4)
    const expected = "   x\n  o x\n o x o\nx o x o\n   |\n"
    expect(result).toBe(expected)
  })

  test('4', () => {
    const result = createChristmasTree('123', 5)
    const expected = "    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n"
    expect(result).toBe(expected)
  })

  test('5', () => {
    const result = createChristmasTree("*@o", 3)
    const expected = "  *\n @ o\n* @ o\n  |\n"
    expect(result).toBe(expected)
  })
})
