// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  //...
  let charMap = {};
  let dups = 0;
  let str = text.toLowerCase();

  for (letters of str) {
    charMap[letters] = charMap[letters] + 1 || 1;
  }

  for (numbers in charMap) {
    console.log(charMap);

    if (charMap[numbers] == 2) {
      dups++;
    }
    if (charMap[numbers] > 2) {
      dups += 1;
    }
  }
  return dups;
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(
  duplicateCount('Indivisibilities'),
  2,
  'characters may not be adjacent'
);
