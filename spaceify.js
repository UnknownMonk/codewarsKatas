function spacify(str) {
  let space = str.split("").join(" ");
  return space;
}

console.log(spacify("hello world"), "h e l l o   w o r l d");
console.log(spacify("12345"), "1 2 3 4 5");
