// function mergeArrays(myArray, alicesArray) {

//   var mergedArray = [];

//   var currentIndexAlice = 0;
//   var currentIndexMine = 0;
//   var currentIndexMerged = 0;

//   while (currentIndexMerged < (myArray.length + alicesArray.length)) {

//     var isMyArrayExhausted = currentIndexMine >= myArray.length;
//     var isAliceArrayExhausted = currentIndexAlice >= alicesArray.length;

//     if (!isMyArrayExhausted && (isAliceArrayExhausted || (myArray[currentIndexMine] < alicesArray[currentIndexAlice]))) {
//       mergedArray[currentIndexMerged] = myArray[currentIndexMine];
//       currentIndexMine++
//       // case: next item comes from alice's array
//     } else {
//       mergedArray[currentIndexMerged] = alicesArray[currentIndexAlice];
//       currentIndexAlice++;
//     }
//     currentIndexMerged++
//   }
//   return mergedArray;

// }
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
let sortedArray = [];

function mergeArrays(myArray, alicesArray) {
  for (let i = 0; i < myArray.length; i++) {
    sortedArray.push(myArray[i]);
    sortedArray.push(alicesArray[i]);
    sortedArray.sort((a, b) => a - b);
  }

  console.log(sortedArray);
}

console.log(mergeArrays(myArray, alicesArray));
