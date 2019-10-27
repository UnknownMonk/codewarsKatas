function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i];
    if (num + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]));
