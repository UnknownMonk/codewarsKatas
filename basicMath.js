//your code here...

function calculate(str) {
  return eval(
    str
      .split("plus")
      .join("+")
      .split("minus")
      .join("-")
  ).toString();
}

console.log();

console.log(calculate("1plus2plus3plus4"), "10");
console.log(calculate("1minus2minus3minus4"), "-8");
console.log(calculate("1plus2plus3minus4"), "2");
