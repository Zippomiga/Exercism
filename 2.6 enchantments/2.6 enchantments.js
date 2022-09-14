export function cardTypeCheck(stack, card) {
  let typeOfCards = 0

  stack.forEach(element => {
    if(element === card) typeOfCards++
  })
  
  return typeOfCards
}

export function determineOddEvenCards(stack, type) {
  let evenCards = 0
  let oddCards = 0

  for(let x of stack) {
    if(x % 2 === 0) {
      evenCards++
    } else {
      oddCards++
    }
  }

  if(type) {
    return evenCards
  } else {
    return oddCards
  }
}