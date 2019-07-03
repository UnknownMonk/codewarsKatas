function maxRot(n) {
  var str = n.toString();
  var arr = [str];
  for (var i = 0; i <= str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    arr.push(str.split().join());
  }
  return Math.max.apply(null, arr);
}

console.log(maxRot(38458215), 85821534);
console.log(maxRot(195881031), 988103115);
console.log(maxRot(896219342), 962193428);
console.log(maxRot(69418307), 94183076);
