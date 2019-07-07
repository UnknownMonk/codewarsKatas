function avgArray(arr) {
  return arr
    .reduce((a, b) => {
      return a.map((v, i) => {
        return v + b[i];
      });
    })
    .map(i => i / arr.length);
}

console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]), [3, 4, 5, 6]);
