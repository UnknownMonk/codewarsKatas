function inArray(array1, array2) {
  let results = [];

  array2.forEach(word => {
    array1.forEach((ending, i) => {
      if (word.includes(ending)) {
        array1.splice(i, 1);
        results.push(ending);
      }
    });
  });

  return results.sort();
}

let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

let a1 = ['xyz', 'live', 'strong'];

a1 = ['live', 'strong', 'arp'];
console.log(inArray(a1, a2), ['arp', 'live', 'strong']);
a1 = ['tarp', 'mice', 'bull'];
console.log(inArray(a1, a2), []);
