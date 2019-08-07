function distribute(m, n) {
  if (n <= 0) return [];
  const candies = Array(n).fill(0);

  if (m <= 0) return candies;

  const minCandies = Math.floor(m / n);

  return candies.map((_, i) => {
    return i < m % n ? minCandies + 1 : minCandies;
  });
}
