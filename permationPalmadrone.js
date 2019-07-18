function paldrone(string) {
  let charMap = {};
  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (!charMap[letter]) charMap[letter] = 0;
    charMap[letter]++;
  }

  let isApermationPalmadrone = false;
  string.forEach(key => {
    console.log(charMap[key]);

    if (charMap[key]) {
      charMap[key]--;
      if (charMap[key] == 0) {
        isApermationPalmadrone = true;
      }
    }
  });
  return isApermationPalmadrone;
}

console.log(paldrone('racecarasdfasdf'));
