import { lowerLuminosity, raiseLuminosity } from './luminosity'

describe('luminosity', () => {
  describe('lowerLuminosity', () => {
    it('lowers the luminosity of the given hue value', () => {
      expect(lowerLuminosity(0, 5)).toBe(0)
      expect(lowerLuminosity(30, 5)).toBe(25)
      expect(lowerLuminosity(60, 5)).toBe(55)
      expect(lowerLuminosity(90, 5)).toBe(95)
      expect(lowerLuminosity(120, 5)).toBe(120)
      expect(lowerLuminosity(150, 5)).toBe(145)
      expect(lowerLuminosity(180, 5)).toBe(175)
      expect(lowerLuminosity(210, 5)).toBe(215)
      expect(lowerLuminosity(240, 5)).toBe(240)
      expect(lowerLuminosity(270, 5)).toBe(265)
      expect(lowerLuminosity(300, 5)).toBe(305)
      expect(lowerLuminosity(330, 5)).toBe(335)
      expect(lowerLuminosity(359, 5)).toBe(4)
      expect(lowerLuminosity(360, 5)).toBe(0)
    })
  })

  describe('raiseLuminosity', () => {
    it('raises the luminosity of the given hue value', () => {
      expect(raiseLuminosity(0, 5)).toBe(5)
      expect(raiseLuminosity(30, 5)).toBe(35)
      expect(raiseLuminosity(60, 5)).toBe(60)
      expect(raiseLuminosity(90, 5)).toBe(85)
      expect(raiseLuminosity(120, 5)).toBe(115)
      expect(raiseLuminosity(150, 5)).toBe(155)
      expect(raiseLuminosity(180, 5)).toBe(180)
      expect(raiseLuminosity(210, 5)).toBe(205)
      expect(raiseLuminosity(240, 5)).toBe(235)
      expect(raiseLuminosity(270, 5)).toBe(275)
      expect(raiseLuminosity(300, 5)).toBe(300)
      expect(raiseLuminosity(330, 5)).toBe(325)
      expect(raiseLuminosity(359, 5)).toBe(354)
      expect(raiseLuminosity(360, 5)).toBe(5)
    })
  })
})
