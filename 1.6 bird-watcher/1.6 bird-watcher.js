export function totalBirdCount(birdsPerDay) {
  let birds = 0;
  for(let i = 0; i < birdsPerDay.length; i++) {
    birds += birdsPerDay[i];
  }
  return birds;
}

export function birdsInWeek(birdsPerDay, week) {
  let x = week * 7;
  let birdsThatWeek = birdsPerDay.slice((x - 7), x);

  return totalBirdCount(birdsThatWeek);
}

export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i < birdsPerDay.length; i+=2) {
    birdsPerDay[i]++;
  }
  return birdsPerDay;
}