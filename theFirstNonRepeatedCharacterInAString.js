function firstNonRepeated(s) {
  let i = 0;
  while (i < s.length) {
    if (s.split("").filter(e => e === s[i]).length === 1) {
      return s[i];
    }
    i++;
  }
  return null;
}

console.log(firstNonRepeated("teeter"), "r");
