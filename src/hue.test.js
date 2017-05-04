import { DARK_HUES, LIGHT_HUES, nearestHue } from './hue'

describe('hue', () => {
  describe('DARK_HUES', () => {
    it('exists', () => {
      expect(DARK_HUES).toBeDefined()
    })
  })

  describe('LIGHT_HUES', () => {
    it('exists', () => {
      expect(LIGHT_HUES).toBeDefined()
    })
  })

  describe('nearestHue', () => {
    it('returns the nearest maximum hue point in a set of hues for a given hue value', () => {
      // Red
      expect(nearestHue(350, DARK_HUES)).toBe(0)
      expect(nearestHue(360, DARK_HUES)).toBe(0)
      expect(nearestHue(0, DARK_HUES)).toBe(0)
      expect(nearestHue(10, DARK_HUES)).toBe(0)

      // Green
      expect(nearestHue(110, DARK_HUES)).toBe(120)
      expect(nearestHue(120, DARK_HUES)).toBe(120)
      expect(nearestHue(130, DARK_HUES)).toBe(120)

      // Blue
      expect(nearestHue(230, DARK_HUES)).toBe(240)
      expect(nearestHue(240, DARK_HUES)).toBe(240)
      expect(nearestHue(250, DARK_HUES)).toBe(240)

      // Yellow
      expect(nearestHue(50, LIGHT_HUES)).toBe(60)
      expect(nearestHue(60, LIGHT_HUES)).toBe(60)
      expect(nearestHue(70, LIGHT_HUES)).toBe(60)

      // Cyan
      expect(nearestHue(170, LIGHT_HUES)).toBe(180)
      expect(nearestHue(180, LIGHT_HUES)).toBe(180)
      expect(nearestHue(190, LIGHT_HUES)).toBe(180)

      // Magenta
      expect(nearestHue(290, LIGHT_HUES)).toBe(300)
      expect(nearestHue(300, LIGHT_HUES)).toBe(300)
      expect(nearestHue(310, LIGHT_HUES)).toBe(300)
    })
  })
})
