function changeCount(change) {
  return (
    '$' +
    change
      .split(' ')
      .map(x => CHANGE[x])
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  );
}

console.log(changeCount('dime penny dollar'), '$1.11');
console.log(changeCount('dime penny nickel'), '$0.16');
console.log(changeCount('quarter quarter'), '$0.50');
console.log(changeCount('dollar penny dollar'), '$2.01');
console.log(
  changeCount(
    'dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny'
  ),
  '$10.01'
);
