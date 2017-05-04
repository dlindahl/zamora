function mod (a, n) {
  return a - Math.floor(a / n) * n
}

// From http://stackoverflow.com/questions/1878907/the-smallest-difference-between-2-angles
export function PHI (a, b) {
  return mod(b - a + 180, 360) - 180
}

export function limit (val, min, max) {
  if (val >= max) {
    return val - max
  } else if (val < min) {
    return max + val
  }
  return val
}
