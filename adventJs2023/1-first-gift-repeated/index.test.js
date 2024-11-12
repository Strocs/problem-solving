import { test, expect } from 'bun:test'
import findFirstRepeated from './index.js'

test('1 - should be a number', () => {
  const result = typeof findFirstRepeated([1, 1, 1, 1, 1])
  expect(result).toBe('number')
})

test('2 - should return 3', () => {
  const result = findFirstRepeated([2, 1, 3, 5, 3, 2])
  expect(result).toBe(3)
})

test('3 - should return 2', () => {
  const result = findFirstRepeated([2, 2])
  expect(result).toBe(2)
})

test('4 - should return -1', () => {
  const result = findFirstRepeated([2, 4, 3, 5, 1])
  expect(result).toBe(-1)
})

test('5 - should return 1', () => {
  const result = findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])
  expect(result).toBe(1)
})

test('6 - should return -1', () => {
  const result = findFirstRepeated([])
  expect(result).toBe(-1)
})

test('7 - should return -1', () => {
  const result = findFirstRepeated([10, 20, 30])
  expect(result).toBe(-1)
})

test('8 - should return 2', () => {
  const result = findFirstRepeated([5, 1, 2, 3, 2, 5, 1])
  expect(result).toBe(2)
})

test('9 - should return 10', () => {
  const result = findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])
  expect(result).toBe(10)
})
