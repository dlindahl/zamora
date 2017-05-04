import { darken, lighten } from './variants'

describe('variants', () => {
  describe('darken', () => {
    it('darkens the given color', () => {
      expect(darken('rgba(191,127,64,1.0)')).toBe('rgb(189, 125, 62)')
    })

    it('darkens the given color according to a specific step value', () => {
      expect(darken('rgba(191,127,64,1.0)', { steps: 5 })).toBe(
        'rgb(170, 106, 44)'
      )
    })

    it('darkens the given color according to a specific scale ratio', () => {
      expect(
        darken('rgba(191,127,64,1.0)', { scale: 'minor second', steps: 5 })
      ).toBe('rgb(188, 124, 61)')
    })

    it('darkens the given color and outputs with an alternate format', () => {
      expect(darken('rgba(191,127,64,1.0)', { format: 'hsl' })).toBe(
        // `color` has some internal rounding issues...
        'hsl(29.80000000000001, 50.6%, 49.3%)'
      )
    })

    it('darkens the given color and alters its alpha channel', () => {
      expect(darken('rgba(191,127,64,0.25)', { alpha: 0.5 })).toBe(
        'rgba(189, 125, 62, 0.5)'
      )
    })

    it('does nothing if no color is provided', () => {
      expect(darken(0)).toBe(0)
    })
  })

  describe('lighten', () => {
    it('lightens the given color', () => {
      expect(lighten('rgba(191,127,64,1.0)')).toBe('rgb(193, 129, 66)')
    })

    it('lightens the given color according to a specific step value', () => {
      expect(lighten('rgba(191,127,64,1.0)', { steps: 5 })).toBe(
        'rgb(212, 149, 87)'
      )
    })

    it('lightens the given color according to a specific scale ratio', () => {
      expect(
        lighten('rgba(191,127,64,1.0)', { scale: 'minor second', steps: 5 })
      ).toBe('rgb(194, 130, 67)')
    })

    it('lightens the given color and outputs with an alternate format', () => {
      expect(lighten('rgba(191,127,64,1.0)', { format: 'hsl' })).toBe(
        // `color` has some internal rounding issues...
        'hsl(29.80000000000001, 50.6%, 50.8%)'
      )
    })

    it('lightens the given color and alters its alpha channel', () => {
      expect(lighten('rgba(191,127,64,0.25)', { alpha: 0.5 })).toBe(
        'rgba(193, 129, 66, 0.5)'
      )
    })

    it('does nothing if no color is provided', () => {
      expect(lighten(0)).toBe(0)
    })
  })
})
