function swapValues(val) {
  // var args = Array.prototype.slice.call(arguments);
  var temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}

swapValues(arr);

var arr = [1, 2];
console.log(arr[0], 2, 'Failed swapping numbers');
console.log(arr[1], 1, 'Failed swapping numbers');
