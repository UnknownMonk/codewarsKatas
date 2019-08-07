function amaroPlan(priateNum) {
  const gold = [];
  const totalGold = priateNum * 20;

  for (let i = 0; i < priateNum; i++) {
    if (i === 0) {
      const amaroGold = totalGold - Math.floor((priateNum - 1) / 2);
      gold.push(amaroGold);
    } else if (i % 2 === 0) {
      gold.push(1);
    } else {
      gold.push(0);
    }
  }

  return gold;
}

console.log(amaroPlan(2), [40, 0]);
console.log(amaroPlan(3), [59, 0, 1]);
console.log(amaroPlan(4), [79, 0, 1, 0]);
console.log(amaroPlan(5), [98, 0, 1, 0, 1]);
