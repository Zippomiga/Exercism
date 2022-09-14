export function cookingStatus(remainingTime) {
  return (remainingTime === 0)? 'Lasagna is done.'
    : (remainingTime > 0)? 'Not done, please wait.'
    : 'You forgot to set the timer.'
}

export function preparationTime(layers, average = 2) {
  return layers.length * average;
}

export function quantities(layers) {
  let qNoodles = 0
  let qSauce = 0
  for(let i = 0; i < layers.length; i++) {
    if(layers[i] === 'noodles') {
      qNoodles += 50
    }
    if(layers[i] === 'sauce') {
      qSauce += 0.2
    }
  }
  return {noodles: qNoodles, sauce: qSauce}
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, portions) {
  let factor = portions / 2
  let scaledRecipe = {}
  for(let x in recipe) {
    scaledRecipe[x] = recipe[x] * factor
  }
  return scaledRecipe
}