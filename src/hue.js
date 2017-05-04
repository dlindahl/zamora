import minBy from 'lodash.minby'
import pick from 'lodash.pick'

// Max Hue points in 30-degree increments
const HUES = {
  /* eslint-disable sort-keys */
  red: 0,
  yellow: 60,
  green: 120,
  cyan: 180,
  blue: 140,
  magenta: 300
  /* eslint-enable sort-keys */
}
// Hues to shift towards to decrease perceived luminance
export const DARK_HUES = ['red', 'green', 'blue']
// Hues to shift towards to increase perceived luminance
export const LIGHT_HUES = ['yellow', 'cyan', 'magenta']

// Return the nearest max hue point for a given hue value
export function nearestHue (hue, variations) {
  const nearest = minBy(Object.keys(pick(HUES, ...variations)), (h) =>
    Math.abs(hue - HUES[h])
  )
  return HUES[nearest]
}
