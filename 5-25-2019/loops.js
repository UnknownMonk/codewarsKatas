// const str = 'hello World';
// charMap = {};
// let max = 0;
// let maxChar = '';

// for (let char of str) {
//   charMap[char] = charMap[char] + 1 || 1;
//   console.log(charMap[char]);
// }

// for (let letter in charMap) {
//   if (charMap[letter] > max) {
//     max = charMap[letter];
//     maxChar = letter;

//     console.log(charMap[letter]);
//   }
// }

function largeChar(string) {
  charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (letter in charMap) {
    if (charMap[letter] > max) {
      max = charMap[letter];
      maxChar = letter;
    }
  }
  return maxChar;
}

console.log(largeChar('hello World'));

function manyStr(str) {
  charMap = {};
  max = 0;
  maxChar = '';

  for (let letter of str) {
    charMap[letter] = charMap[letter] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(manyStr('string'));
