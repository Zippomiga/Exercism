export function getFirstCard(deck) {
  let [a] = deck
  return a
}

export function getSecondCard(deck) {
  let [, b] = deck
  return b
}

export function swapTopTwoCards(deck) {
  [deck[0], deck[1]] = [deck[1], deck[0]]
  return deck
}

export function discardTopCard(deck) {
  let [, ...arr] = deck
  return [deck[0], arr]
}

const FACE_CARDS = ['jack', 'queen', 'king']
export function insertFaceCards(deck) {
  let [, ...arr] = deck
  return [deck[0], ...FACE_CARDS, ...arr]
}