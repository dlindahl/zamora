import Color from 'color'
import { lowerLuminosity, raiseLuminosity } from './luminosity'
import ms from 'modularscale'

/*
 * Based on the blog post:
 *
 *   https://medium.com/@erikdkennedy/color-in-ui-design-a-practical-framework-e18cacd97f9e
 *
 * The article does not prescribe an exact algorithum for adjusting the
 * individual color values, so I reached for the modularscale module as a
 * starting point. Changing the "step" introduces more variation between
 * adjustments and choosing a different ratio scale can increase or decrease
 * the amounts between those steps.
 */

export function darken (baseColor, { scale, steps }) {
  if (!baseColor) {
    return baseColor
  }
  const c = Color(baseColor)
  const delta = ms(steps, scale) / 100
  const newSaturation = c.saturationv() + c.saturationv() * delta
  const newValue = c.value() - c.value() * delta

  return c
    .alpha(1.0)
    .hue(lowerLuminosity(c.hue(), delta))
    .saturationv(newSaturation)
    .value(newValue)
    .hsl()
    .string()
}

/*
 * Convenience method for encapsulating the logic for generating a color
 * derivative used when an element is focused by the user
 */
export function focusColor (baseColor, { scale, steps = 5 }) {
  return lighten(baseColor, { scale, steps })
}

/*
 * Convenience method for encapsulating the logic for generating a color
 * derivative used when an element is hovered over by the user
 */
export function hoverColor (baseColor, { scale, steps = 5 }) {
  return darken(baseColor, { scale, steps })
}

export function lighten (baseColor, { scale, steps }) {
  if (!baseColor) {
    return baseColor
  }
  const c = Color(baseColor)
  const delta = ms(steps, scale) / 100
  const newSaturation = c.saturationv() - c.saturationv() * delta
  const newValue = c.value() + c.value() * delta

  return c
    .alpha(1.0)
    .hue(raiseLuminosity(c.hue(), delta))
    .saturationv(newSaturation)
    .value(newValue)
    .hsl()
    .string()
}
