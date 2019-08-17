function reverseFizzBuzz(s) {
  let arr = s.split(' '),
    x = arr.findIndex(v => /^\d+$/.test(v));
  if (x === -1) {
    if (s === 'Fizz Buzz') return [9, 10];
    if (s === 'Buzz Fizz') return [5, 6];
    if (s === 'Fizz') return [3];
    if (s === 'Buzz') return [5];
    if (s === 'FizzBuzz') return [15];
  }
  return arr.map((v, i) => (i < x ? +arr[x] - (x - i) : +arr[x] + i - x));
}

console.log(reverseFizzBuzz('1 2 Fizz 4 Buzz'), [1, 2, 3, 4, 5]);
console.log(reverseFizzBuzz('Fizz 688 689 FizzBuzz'), [687, 688, 689, 690]);
console.log(reverseFizzBuzz('Fizz Buzz'), [9, 10]);
