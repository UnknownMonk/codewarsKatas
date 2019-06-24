function printerError(s) {
  let errors = 0;
  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];

    if (!currentLetter.match(/[a-m]/)) {
      errors++;
    }
  }
  return `${errors}/${s.length}`;
}

var s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';

console.log(printerError(s), '3/56');
