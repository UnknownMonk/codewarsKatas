function well(x) {
  let good = 0;
  for (let i = 0; i < x.length; i++) {
    const ideas = x[i];
    if (ideas === "good") {
      good += 1;
    }
  }
  if (good == 0) {
    return "Fail!";
  }
  if (good === 1 || good === 2) {
    return "Publish!";
  }
  if (good >= 3) {
    return "I smell a series!";
  }
}

console.log(well(["bad", "bad", "bad"]), "Fail!");
console.log(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
  "I smell a series!"
);
