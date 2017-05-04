import { focusColor, hoverColor } from './helpers'

describe('helpers', () => {
  describe('focusColor', () => {
    it('generates a color useful for :focus states', () => {
      expect(focusColor('red')).toBe('rgb(255, 29, 28)')
      expect(focusColor('#f00', { alpha: 0.5 })).toBe('rgba(255, 29, 28, 0.5)')
      expect(focusColor('#f00', { steps: 1 })).toBe('rgb(255, 4, 4)')
    })
  })

  describe('hoverColor', () => {
    it('generates a color useful for :hover states', () => {
      expect(hoverColor('blue')).toBe('rgb(0, 0, 227)')
      expect(hoverColor('#00f', { alpha: 0.5 })).toBe('rgba(0, 0, 227, 0.5)')
      expect(hoverColor('#f00', { steps: 1 })).toBe('rgb(251, 0, 0)')
    })
  })
})
