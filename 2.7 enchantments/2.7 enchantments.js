export function seeingDouble(deck) {
  return deck.map(card => card * 2)
}

export function threeOfEachThree(deck) {
  return deck.reduce((x, currCard) => {
    (currCard === 3) ? x.push(currCard, currCard, currCard) : x.push(currCard)
    return x
  }, [])
}

export function middleTwo(deck) {
  return deck.slice(deck.length/2 -1, deck.length/2 +1)
}

export function sandwichTrick(deck) {
  let firstCard = deck.shift()
  let lastCard = deck.pop()
  deck.splice(deck.length/2, 0, lastCard, firstCard)
  return deck
}

export function twoIsSpecial(deck) {
  return deck.filter(card => card === 2)
}

export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b)
}

export function reorder(deck) {
  return deck.reverse()
}