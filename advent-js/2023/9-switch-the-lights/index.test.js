import { describe, test, expect } from 'bun:test'
import { adjustLights } from '.'

describe('switch-the-light', () => {
  test('1', () => {
    const result = typeof adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])
    expect(result).toBe('number')
  })

  test('2', () => {
    const result = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])
    expect(result).toBe(1)
  })

  test('3', () => {
    const result = adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])
    expect(result).toBe(2)
  })

  test('4', () => {
    const result = adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])
    expect(result).toBe(1)
  })

  test('5', () => {
    const result = adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])
    expect(result).toBe(0)
  })

  test('6', () => {
    const result = adjustLights(["🔴", "🔴", "🔴"])
    expect(result).toBe(1)
  })

  test('7', () => {
    const result = adjustLights(["🔴", "🔴", "🔴", "🟢", "🟢", "🟢"])
    expect(result).toBe(2)
  })

  test('8', () => {
    const result = adjustLights(["🔴"])
    expect(result).toBe(0)
  })

  test('9', () => {
    const result = adjustLights([])
    expect(result).toBe(0)
  })

  test('10', () => {
    const result = adjustLights(["🟢", "🟢", "🟢", "🟢", "🟢", "🟢", "🟢", "🟢", "🟢", "🟢"])
    expect(result).toBe(5);
  })
  test('11', () => {
    const result = adjustLights(Array(100).fill("🟢"))
    expect(result).toBe(50)
  })
  test('12', () => {
    const result = adjustLights(['🔴', '🟢', '🔴', '🟢', '🔴', '🔴', '🟢'])
    expect(result).toBe(2)
  })
})
