function removeDuplicateWords(s) {
  // your perfect code...
  let split = s.split(' ');

  const set1 = new Set(split);
  let string = '';
  set1.forEach(a => {
    string += `${a} `;
  });
  console;

  return string.trim();
}

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  ),
  'alpha beta gamma delta'
);
