function duplicates(array) {
  const newArray = array.sort((a, b) => a - b);
  if (newArray.length <= 1) return 0;

  let dups = [];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == newArray[i + 1]) {
      dups.push(newArray[i]);
      i++;
    }
  }
  return dups.length;
}

console.log(duplicates([1, 2, 5, 6, 5, 2]), 2);
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]), 4);
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]), 3);
console.log(duplicates([1000, 1000]), 1);
console.log(duplicates([]), 0);
console.log(duplicates([54]), 0);
