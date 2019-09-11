function arrayPlusArray(arr1, arr2) {
  let array1 = 0;
  let array2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    const addElements = arr1[i];
    array1 += addElements;
  }

  for (let i = 0; i < arr2.length; i++) {
    const addElements = arr2[i];
    array2 += addElements;
  }

  return array1 + array2;
}
function arrayPlusArray(arr1, arr2) {
  let array1 = arr1.reduce((a, b) => a + b);
  let array2 = arr2.reduce((a, b) => a + b);
  return array1 + array2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
