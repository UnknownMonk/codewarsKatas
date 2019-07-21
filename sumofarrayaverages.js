function sumAverage(arr) {
  var avgSum = 0;
  for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    for (var j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    avgSum += sum / arr[i].length;
  }

  return Math.floor(avgSum);
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), 44);
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]), -6);
