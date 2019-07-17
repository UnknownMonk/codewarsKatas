function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  return birds.filter(b => !geese.includes(b));
}

console.log(
  gooseFilter([
    'Mallard',
    'Hook Bill',
    'African',
    'Crested',
    'Pilgrim',
    'Toulouse',
    'Blue Swedish'
  ])
);
