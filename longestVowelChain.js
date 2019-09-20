function solve(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let highestCount = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (vowels.includes(s[i]) && vowels.includes(s[i + 1])) {
      count++;
    } else {
      if (highestCount < count) highestCount = count;
      count = 1;
    }
  }
  return highestCount;
}

console.log(solve("codewarriors"), 2);
console.log(solve("suoidea"), 3);
console.log(solve("ultrarevolutionariees"), 3);
console.log(solve("strengthlessnesses"), 1);
console.log(solve("cuboideonavicuare"), 2);
console.log(solve("chrononhotonthuooaos"), 5);
console.log(solve("iiihoovaeaaaoougjyaw"), 8);
