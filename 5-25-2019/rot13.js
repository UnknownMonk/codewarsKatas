function rot13(str) {
  //65-90 uppercase letters
  //97 - 122 lowercase letters

  // place to store the encoded string
  let encoded = ' ';
  //iit over the message
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      let newCharCode = charCode + 13;
      if (newCharCode > 90) {
        newCharCode = 64 + (newCharCode - 90);
      }
      encoded += String.fromCharCode(newCharCode);
    } else if (charCode >= 97 && charCode <= 122) {
      let newCharCode = charCode + 13;
      if (newCharCode > 122) {
        newCharCode = 96 + (newCharCode - 122);
      }
      encoded += String.fromCharCode(newCharCode);
    } else {
      encoded += letter;
    }
  }
  return encoded;
}

console.log(rot13('thisstringiscoded'));
 
