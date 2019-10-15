function vaporcode(string) {
  var arr = [];
  for (var i = 0; i < string.length; ++i)
    if (string[i] != " ") arr.push(string[i].toUpperCase());
  return arr.join("  ");
}

console.log(
  vaporcode("Let's go to the movies"),
  "L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
);
console.log(
  vaporcode("Why isn't my code working?"),
  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
);
