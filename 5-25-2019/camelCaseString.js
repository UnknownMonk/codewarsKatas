function toCamelCase(str) {
  const words = str.split(/-|_/g);
  let camelCase = words[0];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    camelCase += word[0].toUpperCase() + word[i].slice(1);
  }
  return camelCase;
}

toCamelCase('the_stealth_warrior');
