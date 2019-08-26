function removeSmallest(numbers) {
  let smallestIndex = 0;

  for (let i = 1; i < numbers.length; i++) {
    const smalestValue = numbers[smallestIndex];
    const currentValue = numbers[i];

    if (currentValue < smalestValue) {
      smallestIndex = i;
    }
  }
  const newNumbers = numbers.slice();
  newNumbers.splice(smallestIndex, 1);

  return newNumbers;
}

console.log(
  removeSmallest([1, 2, 3, 4, 5]),
  [2, 3, 4, 5],
  'Wrong result for [1, 2, 3, 4, 5]'
);
console.log(
  removeSmallest([5, 3, 2, 1, 4]),
  [5, 3, 2, 4],
  'Wrong result for [5, 3, 2, 1, 4]'
);
console.log(
  removeSmallest([2, 2, 1, 2, 1]),
  [2, 2, 2, 1],
  'Wrong result for [2, 2, 1, 2, 1]'
);
console.log(removeSmallest([]), [], 'Wrong result for []');
