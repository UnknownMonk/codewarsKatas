function comp(array1, array2) {
  //your code here
  if (
    !array1 ||
    !array2 ||
    array1.length == 0 ||
    array2.length == 0 ||
    array1.length != array2.length
  )
    return false;
  const squaredValues = array2.reduce((values, value) => {
    values[value] = values[value] || 0;
    values[value]++;
    return values;
  }, {});

  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    const valueSqrd = value ** value;
    if (!squaredValues[valueSqrd]) {
      return false;
    } else {
      squaredValues[valueSqrd]--;
    }
  }
  return true;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19
];
comp(a1, a2);
