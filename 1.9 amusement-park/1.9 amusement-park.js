export function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId
  };
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor
}

export function ticketStatus(tickets, ticketId) {
  let visitor = tickets[ticketId];
  if(visitor === undefined) {
    return 'unknown ticket id'
  } else if(visitor === null) {
    return 'not sold'
  } else {
    return 'sold to ' + visitor
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!'
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version
}