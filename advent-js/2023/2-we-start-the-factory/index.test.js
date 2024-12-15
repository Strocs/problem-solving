import { describe, test, expect } from "bun:test"
import manufacture from "."

describe('adventjs 2023 - 2', () => {
  test('1 - should be an aray ', () => {
    const result = manufacture(['tren', 'oso', 'pelota'], 'tronesa')
    expect(result).toBeInstanceOf(Array)
  })
  test('2 - should return ["tren","oso"]', () => {
    const result = manufacture(['tren', 'oso', 'pelota'], 'tronesa')
    expect(result).toEqual(['tren', 'oso'])
  })
  test('3 - should return []', () => {
    const result = manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')
    expect(result).toEqual([])

  })
  test('4 - should return []', () => {
    const result = manufacture(['patineta', 'robot', 'libro'], 'nopor')
    expect(result).toEqual([])
  })
  test('5 - should return []', () => {
    const result = manufacture([], 'letras')
    expect(result).toEqual([])
  })
})
