function duplicates(array) {
  let charMap = {};
  let count = 0;
  let zeros = 0;

  for (let num of array) {
    charMap[num] = charMap[num] || 0;
    
    charMap[num]++;
  }
  console.log(zeros);
  

  for (let value in charMap) {
    console.log(charMap[value]);
    console.log(value);
    console.log(charMap);
    
    if (charMap[value] === 2) {
      count += 1;
    } else if (charMap[value] === 4) {
      count += 2;
    } else if (charMap[value] > 6) {
      count += 3;
    }
  }
  console.log(count);

  return count;
}

console.log(duplicates([1, 2, 5, 6, 5, 2]), 2);
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]), 4);
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]), 3);
console.log(duplicates([1000, 1000]), 1);
console.log(duplicates([]), 0);
console.log(duplicates([54]), 0);
