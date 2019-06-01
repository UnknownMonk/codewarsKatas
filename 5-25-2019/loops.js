const str = 'hello World';
charMap = {};
let max = 0;
let maxChar = '';

for (let char of str) {
  charMap[char] = charMap[char]  + 1 || 1
  console.log(charMap[char]);
}

for (let letter in charMap) {
  
  if (charMap[letter] > max) {
    max = charMap[letter];
    maxChar = letter;

    console.log(charMap[letter]);
    
    
  }
}
