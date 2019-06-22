// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// function friend(friends){
//   //your code here
//   const freindList =  friends.filter(friend => friend.length === 4)
//   return freindList

// }
function friend(friends) {
  let realFriends = [];
  for (let friend in friends) {
    if (friends[friend].length === 4) {
      realFriends.push(friends[friend]);
    }
  }
  return realFriends;
}

console.log(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']);
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']), ['Ryan']);
console.log(
  friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']),
  ['Jimm', 'Cari', 'aret']
);
console.log(friend(['Love', 'Your', 'Face', '1']), ['Love', 'Your', 'Face']);
