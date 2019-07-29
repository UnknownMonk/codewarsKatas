var capitals = function(word) {
  // Write your code here

  let charMap = word
    .split('')
    .map((letter, i) => ({
      letter,
      i
    }))
    .filter(({ letter }) => letter === letter.toUpperCase())
    .map(({ i }) => i);

  console.log(charMap);
};

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
