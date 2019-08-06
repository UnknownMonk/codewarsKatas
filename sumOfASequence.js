const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }

  let sum = 0;
  let currentValue = begin;

  while (currentValue <= end) {
    sum += currentValue;
    currentValue += step;
  }

  return sum;
};

console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);
