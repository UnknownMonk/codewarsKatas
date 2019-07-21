function reconstructTrip(tickets) {
  const hash = {};
  const route = [];

  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];

    if (ticket[0] === null) {
      route[0] = ticket[1];
    }
    hash[ticket[0]] = ticket[1];
  }
  console.log(hash);

  for (let i = 1; i < tickets.length - 1; i++) {
    route[i] = hash[route[i - 1]];
  }

  console.log(route);
  return route;
}

const shorterSet = [
  ['PIT', 'ORD'],
  ['XNA', 'CID'],
  ['SFO', 'BHM'],
  ['FLG', 'XNA'],
  [null, 'LAX'],
  ['LAX', 'SFO'],
  ['CID', 'SLC'],
  ['ORD', null],
  ['SLC', 'PIT'],
  ['BHM', 'FLG']
];

console.log(reconstructTrip(shorterSet));
