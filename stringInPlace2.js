function stringInPlace(string) {
  let stringArray = string.split('');

  let startIndex = 0;

  let endIndex = stringArray.length - 1;

  while (startIndex < endIndex) {
    let temp = stringArray[startIndex];

    stringArray[startIndex] = stringArray[endIndex];

    stringArray[endIndex] = temp;

    // move towards middle
    startIndex++;
    endIndex--;
  }

  return stringArray.join('');
}

console.log(stringInPlace('mystring'));
