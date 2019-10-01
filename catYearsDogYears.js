var ownedCatAndDog = function(catYears, dogYears) {
  let dogYearsCount = 0;
  let catYearsCount = 0;
  let totalYears = [];

  if (catYears >= 15 || dogYears >= 15) {
    dogYearsCount++;
    catYearsCount++;
    catYears = catYears - 15;
    dogYears = dogYears - 15;
  }

  if (catYears >= 9 || dogYears >= 9) {
    dogYearsCount++;
    catYearsCount++;
    catYears = catYears - 9;
    dogYears = dogYears - 9;
  }

  if (catYears >= 4) {
    catYearsCount++;
    catYears = catYears - 4;
  }
  if (dogYears >= 5) {
    dogYearsCount++;
    dogYears = dogYears - 5;
  }

  dogYearsCount += Math.floor(dogYears / 5);
  catYearsCount += Math.floor(catYears / 4);

  totalYears.push(catYearsCount, dogYearsCount);
  return totalYears;
};

var ownedCatAndDog = function(cat, dog) {
  return [
    cat < 15 ? 0 : cat < 24 ? 1 : ((cat - 16) / 4) | 0,
    dog < 15 ? 0 : dog < 24 ? 1 : ((dog - 14) / 5) | 0
  ];
};

console.log(ownedCatAndDog(15, 15), [1, 1]);

console.log(ownedCatAndDog(24, 24), [2, 2]);

console.log(ownedCatAndDog(56, 64), [10, 10]);
