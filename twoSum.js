var twoSum = function(nums, target) {
  var sums = [];

  // check each element in array
  for (var i = 0; i < nums.length; i++) {
    // check each other element in the array
    for (var j = i + 1; j < nums.length; j++) {
      // determine if these two elements sum to S
      if (nums[i] + nums[j] === target) {
        sums.push(i, j);
      }
    }
  }

  // return all pairs of integers that sum to S
  return sums;
};
