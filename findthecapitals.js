var capitals = function(word) {
  // Write your code here
  let value = []
  
for (let i = 0; i < word.length; i++) {
  const upperCaseLetter = word[i];

  if(upperCaseLetter === upperCaseLetter.toUpperCase()){
    value.push(i)
  }

  
    
  }
 return value
  

};

// var capitals = function(word) {
//   // Write your code here

//   let charMap = word
//     .split('')
//     .map((letter, i) => ({
//       letter,
//       i
//     }))
//     .filter(({ letter }) => letter === letter.toUpperCase())
//     .map(({ i }) => i);

//   console.log(charMap);
// };

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
console.log(capitals('funKyBuTT'), [4,6,8,9]);




console.log("A".charCode(0));
