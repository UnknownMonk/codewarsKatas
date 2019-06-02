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

const looseEqual = (obj1, obj2) =>
  Object.keys(obj1).every(letter => obj1[letter] === obj2[letter]);

function anagrams(word, words) {
  const letterCount = countLetters(word);
  const anagrams = [];

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const currentWordLetterCount = countLetters(currentWord);

    if (looseEqual(currentWordLetterCount, letterCount)) {
      anagrams.push(currentWord);
    }
  }
}

anagrams('racecar', 'racecare');
