function inviteMoreWomen(L) {
  let party = L.reduce((a, x) => a + x);
  return party >= 1 ? true : false;
}

console.log(inviteMoreWomen([1, -1, 1]), true);

console.log(inviteMoreWomen([1, 1, 1]), true);

console.log(inviteMoreWomen([-1, -1, -1]), false);

console.log(inviteMoreWomen([1, -1]), false);
