import { darken, lighten } from './variants'

/*
 * Convenience method for encapsulating the logic for generating a color
 * derivative used when an element is focused by the user
 */
export function focusColor (baseColor, { steps = 5, ...opts } = {}) {
  return lighten(baseColor, { steps, ...opts })
}

/*
 * Convenience method for encapsulating the logic for generating a color
 * derivative used when an element is hovered over by the user
 */
export function hoverColor (baseColor, { steps = 5, ...opts } = {}) {
  return darken(baseColor, { steps, ...opts })
}
