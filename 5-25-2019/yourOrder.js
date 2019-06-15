function order(words) {
  // ...
  const sortedWords = [];
  const splitWords = words.split(' ');

  //itterate over the string
  for (let i = 0; i < splitWords.length; i++) {
    const word = splitWords[i];
    let digit = +word.match(/\d/);

    console.log((sortedWords[digit - 1] = word));
  }
  return console.log(sortedWords.join(' '));
}

order('4of Fo1r pe6ople g3ood th5e the2');
