// function trickOrTreat(children, candies) {
//   // a place to store a count.
//   let numOfCandies = 0;
//   let bomb = 0;

//   //if the candies arrays length is less than the children reutn trick or treat
//   if (candies.length < children) {
//     return 'Trick or treat!';
//   }
//   for (let i = 0; i < candies.length; i++) {
//     //if the candies inner array is less that 2 return trick or treat
//     let candy = candies[i];
//     if (candies[i].length < 2) {
//       return 'Trick or treat';
//     }
//     candy.forEach(treat => {
//       // if child gets a bomb return trick or treat

//       if (treat === 'bomb') {
//         bomb++

//       } else if (treat === 'candy') {
//         numOfCandies++;
//       }
//     });
//   }
//   //count candys count is == to kids * 2 return thank you strange uncle
//   if(bomb){
//     return "Trick or treat!"
//   }
//   else if (numOfCandies >= children * 2) {
//     return 'Thank you, strange uncle!';
//   }else{
//     return "Trick or treat!"
//   }
// }

function trickOrTreat(children, candies) {
  const hasBomb = bag => bag.some(item => item === 'bomb');
  if (children > candies.length || candies.some(hasBomb)) {
    return 'Trick or treat!';
  }

  const numCandies = bag =>
    bag.reduce((total, thing) => (thing === 'candy' ? total + 1 : total), 0);
  const numCandiesInFirstBag = numCandies(candies[0]);
  const allSameAmmountOfCandies = candies.every(
    bag => numCandies(bag) === numCandiesInFirstBag
  );

  if (numCandiesInFirstBag >= 2 && allSameAmmountOfCandies) {
    return 'Thank you strange uncle!';
  } else {
    return 'Trick or treat!';
  }
}

console.log(
  trickOrTreat(3, [
    ['candy', 'apple', 'candy'],
    ['candy', 'candy'],
    ['candy', 'candy']
  ]),
  'Thank you, strange uncle!'
);

console.log(
  trickOrTreat(3, [['candy', 'apple'], ['apple', 'candy'], ['candy', 'apple']]),
  'Trick or treat!'
);

console.log(
  trickOrTreat(3, [
    ['candy', 'apple', 'candy'],
    ['candy', 'candy'],
    ['candy', 'candy', 'candy']
  ]),
  'Trick or treat!'
);

console.log(
  trickOrTreat(3, [['candy', 'apple', 'candy'], ['candy', 'candy']]),
  'Trick or treat!'
);

console.log(
  trickOrTreat(3, [
    ['candy', 'apple', 'candy'],
    ['candy', 'candy'],
    ['candy', 'bomb', 'candy']
  ]),
  'Trick or treat!'
);
