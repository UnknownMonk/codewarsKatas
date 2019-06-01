// I need a array
const ary = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

function findOdd(array) {
  const counts = array.reduce((counts, number) => {
    counts[number] = counts[number] || 0;
    counts[number]++;

    return counts;
  }, {});

  for (const number in counts) {
    const count = counts[number];

    if (count % 2 !== 0) {
      return +number;
    }
  }
}

findOdd(ary);

//count how many time the number is in the array
//check to see if it is odd
//return the result
