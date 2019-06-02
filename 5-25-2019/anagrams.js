const countLetters = word =>
  Array.prototype.reduce.call(
    word,
    (counts, letter) => {
      letter = letter.toLowerCase();
      counts[letter] = counts[letter] || 0;
      counts[letter]++;
      return counts;
    },
    {}
  );

const looseEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length != obj2Keys.length) {
    return flase;
  }
};

function anagrams(word, words) {
  const letterCount = countLetters(word);
  return words.filter(word => looseEqual(letterCount, countLetters(word)));
}

anagrams('racecar', 'racecare');
