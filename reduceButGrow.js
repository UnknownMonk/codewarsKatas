function grow(x) {
  return x.reduce((a, b) => a * b);
}

function grow(x) {
  let count = 1;
  for (let i = 0; i < x.length; i++) {
    const element = x[i];

    count *= element;
  }
  return count;
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
