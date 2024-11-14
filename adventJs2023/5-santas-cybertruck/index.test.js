import cyberReindeer from ".";
import { describe, test, expect } from 'bun:test'

describe('santas-cybertruck', () => {
  test('should work', () => {
    const result = cyberReindeer('S..|...|..', 10)
    expect(result).toEqual([
      'S..|...|..',
      '.S.|...|..',
      '..S|...|..',
      '..S|...|..',
      '..S|...|..',
      '...S...*..',
      '...*S..*..',
      '...*.S.*..',
      '...*..S*..',
      '...*...S..',
    ])
  })
})
