function toCamelCase(str) {
  const words = str.split(/-|_/g);
  let camelCase = words[0];
  for (let i = 1; i < words.length; i++) {
    camelCase += words[i][0].toUpperCase() + words[i].slice(1);
  }
  console.log(camelCase);

  return camelCase;
}

toCamelCase('the_stealth_warrior');
