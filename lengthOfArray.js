var lengthOfSequence = function(arr, n) {
  var hits = arr.filter(i => i === n).length;
  console.log(arr.lastIndexOf(n));

  return hits === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
};

var lengthOfSequence = function(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const seg = arr[i];
    if (seg === n) {
      count++;
    }
  }

  return count === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
};

console.log(
  lengthOfSequence([1, 1], 1),
  2,
  "Returns two when there are only two elements in the array"
);
console.log(
  lengthOfSequence([1, 2, 3, 1], 1),
  4,
  "Returns four for an array of length four and the number to be searched at the boundaries"
);
console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5, "Returns five");
console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4, "Returns four");
