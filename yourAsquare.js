// let isSquare = function(n) {
//   if (n < 0) {
//     return false;
//   }
//   let aNumber = [];
//   let sNumber = n.toString();
//   for (let i = 0; i < sNumber.length; i++) {
//     const num = sNumber[i];
//     aNumber.push(+num);
//   }
//   let root = 0;

//   for (let i = 0; i < aNumber.length; i++) {
//     if (aNumber.length > 1) {
//       let red = aNumber.reduce((a, b) => a + b, 0);
//       root = red;
//     }
//     let a2Number = [];
//     if (root > 9) {
//       let sNumber = root.toString();
//       for (let i = 0; i < sNumber.length; i++) {
//         const num = sNumber[i];
//         a2Number.push(+num);
//       }
//       let red2 = a2Number.reduce((a, b) => a + b, 0);
//       root = red2;
//     }
//     if (root === 0 || root === 1 || root === 4 || root === 7) {
//       console.log(root);
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

var isSquare = function(n) {
  if (Math.sqrt(n) % 1 == 0) return true;
  else return false;
};

console.log(
  isSquare(-1),
  false,
  "-1: Negative numbers cannot be square numbers"
);
console.log(isSquare(0), true, "0 is a square number (0 * 0)");
console.log(isSquare(3), false, "3 is not a square number");
console.log(isSquare(4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");
