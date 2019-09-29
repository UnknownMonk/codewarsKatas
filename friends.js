function friends(n) {
  let count = 0;
  if (n <= 2) {
    return count;
  }
  while (n > 2) {
    n /= 2;
    count++;
  }

  return count;
}

console.log(friends(0), 0);
console.log(friends(1), 0);
console.log(friends(2), 0);
