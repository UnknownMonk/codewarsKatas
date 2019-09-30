function countSheeps(arrayOfSheep) {
  let count = 0;

  arrayOfSheep.forEach(sheep => {
    if (sheep === true) {
      count++;
    }
  });
  return count;
}

let countSheeps = arrayOfSheep => {
  arrayOfSheep.reduce((count, i) => {
    return i == true ? (count += 1) : sum;
  });
};

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true
];

console.log(countSheeps(array1) == 17, "There are 17 sheeps in total");
