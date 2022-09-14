export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  let a = word.slice(0, 1).toUpperCase();
  let b = word.slice(1).toLowerCase();

  return a + b;
}

export function backDoorResponse(line) {
  let a = line.trim();
  
  return a[a.length - 1];
}

export function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please';
}
