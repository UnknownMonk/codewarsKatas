var moveZeros = function(arr) {
  // TODO: Program me
  const noZero = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      counter++;
    }
    if (arr[i] !== 0) {
      noZero.push(arr[i]);
    }
  }
  for (let i = 0; i < counter; i++) {
    noZero.push(0);
  }
  return noZero;
};

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);
