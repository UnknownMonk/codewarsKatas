// function correct(string) {
//   // your code here

//   mistakes = { 5: 'S', 0: 'O', 1: 'I' };

//   return string.replace(/5|0|1/g, letter => mistakes[letter]);
// }

// correct('L0ND0N');
// correct('DUBL1N');
// correct('51NGAP0RE');
// correct('BUDAPE5T');
// correct('PAR15');

function noStars(string) {
  curse = { 1: '*', 2: '$', 3: '&' };


  return string.replace(/1|2|3/g, letter => curse[letter]);
}

console.log(noStars('1u2k Sh3t'));
