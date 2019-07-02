function enough(cap, on, wait) {
  const fitOnBuss = on + wait - cap;
  return fitOnBuss <= 0 ? 0 : fitOnBuss;
}

console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);
