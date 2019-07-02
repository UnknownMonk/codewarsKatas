function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0;

  classPoints.push(yourPoints);
  console.log(classPoints);

  for (let i = 0; i < classPoints.length; i++) {
    const element = classPoints[i];
    sum += element;
  }
  sum = sum / classPoints.length;
  return yourPoints > sum;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
