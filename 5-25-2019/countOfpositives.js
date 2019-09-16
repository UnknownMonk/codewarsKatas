function countPositivesSumNegatives(input) {
  let count = [];
  let neg = 0;
  let pos = 0;
  if (input == [0, 0]) {
    return [];
  }
  input.forEach(check => {
    if (check < 0) {
      neg += check;
    } else {
      pos++;
    }
  });

  count.push(pos, neg);
  return count;
}

function countPositivesSumNegatives(input) {
  return input && input.length
    ? input.reduce(
        function(p, c) {
          c <= 0 ? (p[1] += c) : (p[0] += 1);

          return p;
        },
        [0, 0]
      )
    : [];
}

console.log(
  countPositivesSumNegatives([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15
  ])
);
