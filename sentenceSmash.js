function smash(words) {
  return words.join(' ');
}
//split the array on the comma and join on space

//hello

console.log(smash(['hello']), 'hello');
console.log(smash(['hello', 'world']), 'hello world');
