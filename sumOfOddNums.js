// itterate over the array of object get names
//put them in a array
//check if array is equale to 1 2 or more
// return the right stirng

// function list(names) {
//   //your code here
//   let sentance = '';

//   for (let i = 0; i < names.length; i++) {
//     const name = names[i].name;
//     if (i == names.length - 1) {
//       sentance += name;
//     } else if (i == names.length - 2) {
//       sentance += name + ' & ';
//     } else {
//       sentance += name + ', ';
//     }
//   }
//   return sentance;
// }

function list(names){
  return names.reduce((sentence, {name}, i) => {
    if(i == names.length -1 ){
     return sentence + name;
    }else if( i == names.length - 2){
        return sentence + name + ' & '
    }else {
      return sentence + name + ', '
    }
  }, '')
}

console.log(
  list([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Homer' },
    { name: 'Marge' }
  ]),
  'Bart, Lisa, Maggie, Homer & Marge',
  'Must work with many names'
);
console.log(
  list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]),
  'Bart, Lisa & Maggie',
  'Must work with many names'
);
console.log(
  list([{ name: 'Bart' }, { name: 'Lisa' }]),
  'Bart & Lisa',
  'Must work with two names'
);
console.log(list([{ name: 'Bart' }]), 'Bart', 'Wrong output for a single name');
console.log(list([]), '', 'Must work with no names');
