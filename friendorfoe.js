// function friend(friends) {
// let friendsOf = []

//   for (let i = 0; i < friends.length; i++) {
//     const friend = friends[i];
//     let arrFeiend = friend.split('')
//     console.log(arrFeiend);

//     if( arrFeiend.length === 4){
//       friendsOf.push(friend)
//     }
//   }
//   return friendsOf
// }
function friend(friends) {
  return friends.filter(function(name) {
    return name.length == 4;
    console.log(name);
  });
}
console.log(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']);
// console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']), ['Ryan']);
// console.log(
//   friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']),
//   ['Jimm', 'Cari', 'aret']
// );
// console.log(friend(['Love', 'Your', 'Face', '1']), ['Love', 'Your', 'Face']);
