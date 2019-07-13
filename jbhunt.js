function oddNumbers(l, r) {
  let nums = [];
  for (let i = l; i <= r + 1; i++) {
    if (i % 2 === 1) {
      nums.push(i);
    }
  }
  return nums;
}
console.log(oddNumbers(3, 9));
