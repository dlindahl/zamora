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

export function darken (
  baseColor,
  { alpha = null, format = 'rgb', scale, steps = 0 } = {}
) {
  if (!baseColor) {
    return baseColor
  }
  const c = Color(baseColor)
  const delta = ms(steps, scale) / 100
  const newSaturation = c.saturationv() + c.saturationv() * delta
  const newValue = c.value() - c.value() * delta
  alpha = alpha || c.alpha()

  return c
    .hue(lowerLuminosity(c.hue(), delta))
    .saturationv(newSaturation)
    .value(newValue)
    .alpha(alpha)[format]()
    .string()
}

export function lighten (
  baseColor,
  { alpha = null, format = 'rgb', scale, steps = 0 } = {}
) {
  if (!baseColor) {
    return baseColor
  }
  const c = Color(baseColor)
  const delta = ms(steps, scale) / 100
  const newSaturation = c.saturationv() - c.saturationv() * delta
  const newValue = c.value() + c.value() * delta
  alpha = alpha || c.alpha()

  return c
    .hue(raiseLuminosity(c.hue(), delta))
    .saturationv(newSaturation)
    .value(newValue)
    .alpha(alpha)[format]()
    .string()
}
