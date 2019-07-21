function ransomeNote(sentance, mag) {
  let sentance1 = sentance.split(' ');
  let mag1 = mag.split(' ');
  let magObj = {};

  for (let i = 0; i < mag1.length; i++) {
    let word = mag1[i];

    if (!magObj[word]) magObj[word] = 0;
    magObj[word]++;
    console.log(magObj);
  }
  let noteIsPossible = true;
  sentance1.forEach(word => {
    if (magObj[word]) {
      magObj[word]--;
      if (magObj[word] < 0) noteIsPossible = false;
    } else noteIsPossible = false;
  });

  return noteIsPossible;
}

console.log(
  ransomeNote(
    'you dirty bitch',
    ' you dirty bitch you mother fucker of a algo you'
  )
);
