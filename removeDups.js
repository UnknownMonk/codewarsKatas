function distinct(a) {
  const newArray = a.sort((a, b) => a - b);
  const refactoredArr = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] != newArray[i + 1]) {
      refactoredArr.push(newArray[i]);
    }
  }
  return refactoredArr;
}

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);
