const cache = {};

function fibonacci(n) {
  if (cache[n]) return cache[n];

  if (n == 0 || n == 1) {
    return n;
  }

  const n1 = fibonacci(n - 1);
  cache[n - 1] = n1;
  const n2 = fibonacci(n - 2);
  cache[n - 2] = n2;
  // cache[n] = fibonacci(n -1) + fibonacci(n -2);
  return n1 + n2;
}
