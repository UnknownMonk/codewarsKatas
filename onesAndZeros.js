const binaryArrayToNumber = arr => {
  let total = 0;

  if (arr[arr.length - 1]) {
    total += 1;
  }
  if (arr[arr.length - 2]) {
    total += 2;
  }

  if (arr[arr.length - 3]) {
    total += 4;
  }
  if (arr[arr.length - 4]) {
    total += 8;
  }

  if (arr[arr.length - 5]) {
    total += 16;
  }

  if (arr[arr.length - 6]) {
    total += 32;
  }
  if (arr[arr.length - 7]) {
    total += 64;
  }

  if (arr[arr.length - 8]) {
    total += 128;
  }

  console.log(total);
  return total;
};

// const binaryArrayToNumber = arr => {
//   var x = arr.join("");
//   var p = parseInt(x, 2);
//   return p;
// };

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);
