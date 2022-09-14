export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;      
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;    
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let necessaryLimes = [];
  let i = 0;
  while((i < limes.length) && (wedgesNeeded > 0)) {
    switch(limes[i]) {
      case 'small':
        wedgesNeeded -= 6;
        break;
      case 'medium':
        wedgesNeeded -= 8;
        break;
      case 'large':
        wedgesNeeded -= 10;
        break;
    }
    necessaryLimes.push(limes[i]);
    i++;
  }
  return necessaryLimes.length;
}

export function remainingOrders(timeLeft, orders) {
  while(timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  } 
  return orders;
}