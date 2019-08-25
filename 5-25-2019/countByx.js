function countBy(x, n) {
  var z = [];
  if (z.length == 0) {
    z[0] = x;
  }

  for (let i = 0; i < z.length; i++) {
    if (z.length < n) {
      let addIndex = z[0] + z[i];
      z.push(addIndex);
    }
  }

  return z;
}

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

console.log(countBy(1, 5), [1, 2, 3, 4, 5], 'Array does not match');
console.log(countBy(2, 5), [2, 4, 6, 8, 10], 'Array does not match');
