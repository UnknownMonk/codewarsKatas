function makeNegative(num) {
  // Code?
  if (num < 0) {
    return num;
  } else {
    let negitiveNum = num * -1;
    return negitiveNum;
  }
}

console.log(makeNegative(42), -42);
