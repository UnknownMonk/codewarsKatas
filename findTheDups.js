function duplicates(arr) {
  //TODO: return the array of duplicates from arr
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).indexOf(arr[i]) > -1 && output.indexOf(arr[i]) < 0)
      output.push(arr[i]);
  }

  return output;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']), 3, 'Nope, try again');
console.log(duplicates([0, 1, 2, 3, 4, 5]), 0, 'Nope, try again');
