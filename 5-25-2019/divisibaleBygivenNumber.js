function divisibleBy(numbers, divisor) {
  let dividedBy = [];
  numbers.forEach(num => {
    if (num % divisor === 0) {
      dividedBy.push(num);
    }
  });
  return dividedBy;
}

console.col(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
console.col(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
console.col(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
console.col(divisibleBy([0], 4), [0]);
console.col(divisibleBy([1, 3, 5], 2), []);
