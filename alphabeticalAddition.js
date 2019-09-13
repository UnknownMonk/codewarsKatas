function addLetters(...letters) {
  let charMap = {};
  let addedAlp = [];
  const alph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  if (letters == "") {
    return "z";
  }
  for (let i = 0; i < alph.length; i++) {
    const lett = alph[i];
    charMap[lett] = i + 1;
  }
  for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    addedAlp.push(charMap[element]);
  }
  let addedNum = addedAlp.reduce((a, b) => a + b, 0);

  for (const objLetter in charMap) {
    if (charMap[objLetter] === addedNum) {
      return objLetter;
    }
  }
  console.log(charMap);
}

function addLetters(...letters) {
  if (letters.length == 0) return "z";
  else if (letters.length == 1) return letters[0];
  else {
    const lettersArr = [
      " ",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    var lettersSum = 0;
    for (var i = 0; i < letters.length; i++) {
      lettersSum += lettersArr.indexOf(letters[i]);
    }
    if (lettersSum <= 26) return lettersArr[lettersSum];
    else if (lettersSum % 26 == 0) return "z";
    else return lettersArr[lettersSum % 26];
  }
}

console.log(addLetters("a", "b", "c"));
console.log(addLetters("h", "k", "d"));
console.log(addLetters("a", "b"));

console.log(addLetters("z", "a"));
