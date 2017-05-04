import { DARK_HUES, LIGHT_HUES, nearestHue } from './hue'

export function lowerLuminosity (hue, raiseAmount) {
  return shiftLuminosity(hue, raiseAmount, DARK_HUES)
}

export function raiseLuminosity (hue, raiseAmount) {
  return shiftLuminosity(hue, raiseAmount, LIGHT_HUES)
}

// Shift perceived luminance towards or away from a specific max hue value
export function shiftLuminosity (hue, shiftAmount, huePoints) {
  const hueShift = nearestHue(hue, huePoints)
  if (hueShift > hue) {
    return hue - shiftAmount
  }
  return hue + shiftAmount
}
