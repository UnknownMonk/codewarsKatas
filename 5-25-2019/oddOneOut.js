function stray(numbers) {
  let char = {};
  for (let num of numbers) {
    char[num] = char[num] + 1 || 0;
  }

  for (let key in char) {
    if (char[key] === 0) {
      return +key;
    }
  }
}

console.log(stray([1, 1, 2]), 2);
