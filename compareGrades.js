function compareTriplets(a, b) {
  let grade = [];
  let count = 0;
  let count2 = 0;
  a.forEach(num =>
    b.forEach(num2 => {
      if (num > num2) {
        count++;
      }
    })
  );
  return count;
}

function compareTriplets(a, b) {
  let counterA = 0,
    counterB = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      counterA++;
    } else if (a[i] < b[i]) {
      counterB++;
    }
  }

  return [counterA, counterB];
}

console.log(compareTriplets([1, 2, 3], [1, 2, 3]));
