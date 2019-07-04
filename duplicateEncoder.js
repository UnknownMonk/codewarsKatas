function duplicateEncode(word) {
  const isDuplicate = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (letter in isDuplicate) {
      isDuplicate[letter] = true;
    } else {
      isDuplicate[letter] = false;
    }
  }
  let parenthesis = '';
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (isDuplicate[letter]) {
      parenthesis += ')';
    } else {
      parenthesis += '(';
    }
  }

  return parenthesis;
}

console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())', 'should ignore case');
console.log(duplicateEncode('(( @'), '))((');
