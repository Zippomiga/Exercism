export function translate2d(dx, dy) {
  return function(x, y) {
    return [dx + x, dy + y]
  }
}

export function scale2d(sx, sy) {
  return function(x, y) {
    return [sx * x, sy * y]
  }
}

export function composeTransform(f, g) {
  return function(x, y) {
    let a = f(x, y)
    return g(a[0], a[1])
  }
}

export function memoizeTransform(f) {
  let a
  let b
  let result
  return function(x, y) {
    if(x == a && y == b) {
      return result
    } 
    a = x
    b = y
    result = f(x, y)
    return result
  }
}