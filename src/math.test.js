import { limit, PHI } from './math'

describe('math', () => {
  describe('PHI', () => {
    it('calculates the difference between two degrees', () => {
      expect(PHI(0, 10)).toBe(10)
      expect(PHI(10, 0)).toBe(-10)
      expect(PHI(0, 0)).toBe(0)
      expect(PHI(0, 360)).toBe(0)
      expect(PHI(0, 350)).toBe(-10)
      expect(PHI(350, 0)).toBe(10)
      expect(PHI(170, 190)).toBe(20)
      expect(PHI(190, 170)).toBe(-20)
    })
  })

  describe('limit', () => {
    it('limits a number between a min and max allowing for overflow', () => {
      expect(limit(-10, 0, 360)).toBe(350)
      expect(limit(0, 0, 360)).toBe(0)
      expect(limit(180, 0, 360)).toBe(180)
      expect(limit(360, 0, 360)).toBe(0)
      expect(limit(370, 0, 360)).toBe(10)
    })
  })
})
