// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// function divisors(integer) {
//   let results = [];

//   for (let i = 2; i < integer; i++) {
//     const number = integer;
//     if (number % i == 0) {
//       results.push(i);
//       console.log(results);
//     }
//   }
//   if (results.length == 0) {
//     return integer + ' is prime';
//   }
//   return results;
// }

function divisors(number) {
  return Array.from({ length: number - 2 }).reduce((results, _, i) => {
    const value = i + 2;
    if (number % value == 0) {
      results.push(value);
    }
    if (i == number - 3 && results.length == 0) {
      return number + ' is prime';
    }
    return results;
  }, []);
}

console.log(divisors(9));
