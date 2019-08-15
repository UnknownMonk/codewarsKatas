function solve(s) {
  //..
  let lowerCount = 0;
  let upperCount = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (element.match(/[a-z]/g)) {
      lowerCount++;
    } else {
      upperCount++;
    }
  }
  if (upperCount > s.length / 2) {
    return s.toUpperCase();
  }
  if (s.length / 2 == upperCount || lowerCount) {
    return s.toLowerCase();
  }
}

console.log(solve('code'), 'code');
console.log(solve('CODe'), 'CODE');
console.log(solve('COde'), 'code');
console.log(solve('Code'), 'code');
