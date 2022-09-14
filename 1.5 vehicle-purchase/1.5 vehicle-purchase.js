export function needsLicense(kind) {
  return (kind === 'car') || (kind === 'truck'); 
}

export function chooseVehicle(option1, option2) {
  let rest = " is clearly the better choice."
  if(option1 < option2) {
    return option1 + rest;
  } else {
    return option2 + rest;
  }
}

export function calculateResellPrice(originalPrice, age) {
  if(age < 3) {
    return originalPrice * 0.8;
  } else if(age > 10) {
    return originalPrice * 0.5;
  } else if((age >= 3) && (age <= 10)) {
    return originalPrice * 0.7;
  }
}