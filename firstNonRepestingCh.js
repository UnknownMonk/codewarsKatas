function firstNonRepeatingLetter(s) {
  if (!s) return '';
  charMap = {};

  for (let char of s) {
    char = char.toLowerCase();
    charMap[char] = charMap[char] || 0;
    charMap[char]++;
  }

  return (
    Array.prototype.find.call(s, letter => {
      return charMap[letter.toLowerCase()] === 1;
    }) || ''
  );
}

console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
