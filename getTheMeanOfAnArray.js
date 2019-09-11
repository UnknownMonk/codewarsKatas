function getAverage(marks) {
  let sum = 0;
  let index = 0;
  for (let i = 0; i < marks.length; i++) {
    const grade = marks[i];
    sum += grade;
    index = i;
    console.log(sum);
  }

  return Math.floor(sum / index);
}

console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
