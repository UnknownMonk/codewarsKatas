function openOrSenior(data) {
  const categories = [];

  for (let i = 0; i < data.length; i++) {
    const member = data[i];
    const age = member[0];
    const handyCap = member[1];

    if (age >= 55 && handyCap >= 7) {
      categories.push('Senior');
    } else {
      categories.push('Open');
    }
  }
  return categories;
}

openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]);
