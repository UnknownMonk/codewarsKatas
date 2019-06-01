function isIsogram(str) {
  //...
  const compare = {};
  //itterate over the string
  //compare string with its self
  //return true or false
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (!compare[letter]) {
      compare[letter] = 1;
    } else {
      return false;
    }
  }
  return true;
}

isIsogram('Dermatoglyphics');
