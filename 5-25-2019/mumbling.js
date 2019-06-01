function accum(input) {
  input.split('').reduce(result);
}

accum('abcdefg');

// function accum(string) {
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       console.log(i);

//       if (j == 0) {
//         result += string[i].toUpperCase();
//       } else {
//         result += string[i].toLowerCase();
//       }
//     }
//     if (i != string.length - 1) {
//       result += '-';
//     }
//   }
//   console.log(result);

//   return result;
// }

// accum('abcdefg');
