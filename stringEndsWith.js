function solution(str, ending) {
  // TODO: complete
  let sting = str.split("");

  let slicedSting = sting.slice(sting.length - ending.length, sting.length);

  if (ending == slicedSting.join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
