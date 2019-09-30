function move(position, roll) {
  return position + roll * 2;
}

console.log(move(0, 4), 8);
console.log(move(3, 6), 15);
console.log(move(2, 5), 12);
