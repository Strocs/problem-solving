import createMagicPotion from './index.js'
import { expect, test } from 'bun:test'

test('1 - should return an array', () => {
  const result = createMagicPotion([4, 5, 6, 2], 8)
  const isArray = Array.isArray([result]) ? 'array' : typeof result
  expect(isArray).toBe('array')
})

test('2 - should return [2,3]', () => {
  const result = createMagicPotion([13, 5, 6, 2], 8)
  expect(result).toEqual([2, 3])
})

test('3 - should return [1,2]', () => {
  const result = createMagicPotion([11, 3, 7, 5], 10)
  expect(result).toEqual([1, 2])
})

test('4 - should return [0,2]', () => {
  const result = createMagicPotion([4, 3, 2, 3, 4], 6)
  expect(result).toEqual([0, 2])
})

test('5-  should return [2,3]', () => {
  const result = createMagicPotion([13, 5, 6, 2], 8)
  expect(result).toEqual([2, 3])
})

test('6 - should return [1,2]', () => {
  const result = createMagicPotion([11, 3, 7, 5], 10)
  expect(result).toEqual([1, 2])
})

test('7 - should return [0,2]', () => {
  const result = createMagicPotion([4, 3, 2, 3, 4], 6)
  expect(result).toEqual([0, 2])
})

test('8 - should return undefined', () => {
  const result = createMagicPotion([0, 0, -2, 3], 2)
  expect(result).toBeUndefined()

})

test('9 - should return [3,4]', () => {
  const result = createMagicPotion([10, 5, 2, 3, 7, 5], 10)
  expect(result).toEqual([3, 4])
})

test('10 - should return [2,4]', () => {
  const result = createMagicPotion([1, 2, 3, 4, 5], 8)
  expect(result).toEqual([2, 4])
})

test('11 - should return [0,2]', () => {
  const result = createMagicPotion([5, 1, 4, 6, 2], 9)
  expect(result).toEqual([0, 2])
})

test('12 - should return [0,1]', () => {
  const result = createMagicPotion([1, -2, 3, -4, 5], -1)
  expect(result).toEqual([0, 1])
})

test('13 - should return [1,2]', () => {
  const result = createMagicPotion([10, 20, 30, 40], 50)
  expect(result).toEqual([1, 2])
})

test('14 - should return undefined', () => {
  const result = createMagicPotion([], 10)
  expect(result).toBeUndefined()
})
