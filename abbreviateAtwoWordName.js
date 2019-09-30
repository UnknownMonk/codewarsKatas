function abbrevName(name) {
  // code away
  let nameArray = name.split(" ");
  console.log(nameArray);
  let first = nameArray[0].slice(0, 1);
  let last = nameArray[1].slice(0, 1);
  return `${first}.${last}`;
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
