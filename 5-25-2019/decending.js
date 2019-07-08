function descendingOrder(n) {
  //...
  const dec = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return +dec;
}

console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(123456789), 987654321);
