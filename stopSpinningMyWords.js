// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function revString(input) {
  return input
    .split('')
    .reverse()
    .join('');
}

function spinWords(str) {
  //TODO Have fun :)
  //need a place to store a string

  return str
    .split(' ')
    .map(word => {
      if (word.length >= 5) {
        return revString(word);
      }

      return word;
    })
    .join(' ');

  //need to itterate over every word of the string
  //need to reverse the word
  //then join it back together and palce it in the string holder
}

console.log(spinWords('Hello my nameee is'));
