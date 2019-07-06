// function solution(value) {
//   //...
//   let box = new Array(value).fill(0);
//   box[box.length - 1] = value;
//   return `Value is ${box
//     .toString()
//     .split(',')
//     .join('')}`;
// }
function solution(value) {
  let string = value.toString();
  if (string.length === 1) {
    return `Value is 0000${string}`;
  } else if (string.length === 2) {
    return `Value is 000${string}`;
  } else if (string.length === 3) {
    return `Value is 00${string}`;
  } else if (string.length === 4) {
    return `Value is 0${string}`;
  } else {
    return `Value is ${string}`;
  }
}

console.log(solution(5), 'Value is 00005');
