export function dayRate(ratePerHour) {
  const HOURS_AT_WORK = 8;
  return HOURS_AT_WORK * ratePerHour;
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const BILLED_DAYS = 22;
  let discountedDays = (Math.floor(numDays / BILLED_DAYS)) * BILLED_DAYS;
  let discountedRate = ((discountedDays * dayRate(ratePerHour)) * (1 - discount));
  let notDiscountedRate = (numDays - discountedDays) * dayRate(ratePerHour);
  
  return Math.ceil(discountedRate + notDiscountedRate);
}