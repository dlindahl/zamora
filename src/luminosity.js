import { DARK_HUES, LIGHT_HUES, nearestHue } from './hue'
import { limit, PHI } from './math'

export function lowerLuminosity (hue, raiseAmount) {
  return shiftLuminosity(hue, raiseAmount, DARK_HUES)
}

export function raiseLuminosity (hue, raiseAmount) {
  return shiftLuminosity(hue, raiseAmount, LIGHT_HUES)
}

// Shift perceived luminance towards or away from a specific max hue value
function shiftLuminosity (hue, shiftAmount, huePoints) {
  if (hue === 360) {
    hue = 0
  }
  const hueShift = nearestHue(hue, huePoints)
  const phi = PHI(hue, hueShift)
  if (phi === 0) {
    return hue
  }
  let newHue
  if (phi > 0) {
    newHue = hue + shiftAmount
  } else {
    newHue = hue - shiftAmount
  }
  return limit(newHue, 0, 360)
}
