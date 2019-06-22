function squareDigits(num) {
  //may the code be with you

  let numberSqured = '';

  while (num > 0) {
    let digit = num % 10;

    let squaredDigit = Math.pow(digit, 2);
    numberSqured = squaredDigit + numberSqured;

    num = Math.floor(num / 10);
  }
  return +numberSqured;
}

console.log(squareDigits(9119), 811181);
