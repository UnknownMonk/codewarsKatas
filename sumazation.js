var summation = function(num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

console.log(summation(1), 1);
console.log(summation(8), 36);
