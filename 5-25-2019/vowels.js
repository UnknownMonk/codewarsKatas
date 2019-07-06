function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return str
    .split('')
    .filter(letter => {
      return vowels.indexOf(letter.toLowerCase()) == -1;
    })
    .join('');
}

console.log(
  disemvowel('This website is for losers LOL!'),
  'Ths wbst s fr lsrs LL!'
);
