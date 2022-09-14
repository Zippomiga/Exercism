export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}

export function buildBirthdaySign(age) {
  let strAge = (age < 50)? 'young' : 'mature'
  return `Happy Birthday! What a ${strAge} fellow you are.`

}

export function graduationFor(name, year) {
  return `Congratulations ${name}!
Class of ${year}`
}

export function costOf(sign, currency) {
  let strSign = (sign.length *2 +20).toFixed(2)
  return `Your sign costs ${strSign} ${currency}.`
}