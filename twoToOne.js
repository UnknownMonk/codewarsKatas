function longest(s1, s2) {
  charMap = {};
  let sortArr = [];
  // your code

  const combinedStr = s1 + s2;
  console.log(combinedStr);

  for (let letters of combinedStr) {
    charMap[letters] = charMap[letters] || 0;
    charMap[letters]++;
  }
  for (let key in charMap) {
    sortArr.push(key);
  }

  return sortArr.sort().join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
console.log(
  longest('loopingisfunbutdangerous', 'lessdangerousthancoding'),
  'abcdefghilnoprstu'
);
console.log(longest('inmanylanguages', 'theresapairoffunctions'));
