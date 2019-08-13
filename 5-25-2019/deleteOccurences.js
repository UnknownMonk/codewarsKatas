function deleteNth(arr, n) {
  let counts = {};

  let results = [];

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (!counts[currentNumber] || counts[currentNumber] < n) {
      results.push(currentNumber);
      counts[currentNumber] = counts[currentNumber] + 1 || 1;
    }
  }

  return results;
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [
  1,
  1,
  3,
  3,
  7,
  2,
  2,
  2
]);
