function capitalize(s){

  let capitalizedEvenNum = []
  let evenOdd = ''
  let oddEven = ''
  for (let i = 0; i < s.length; i++) {
    const letters = s[i];
    i % 2 == 0?evenOdd += letters.toUpperCase(): evenOdd += letters.toLowerCase() 
  }
  for (let i = 0; i < s.length; i++) {
    const letters = s[i];
    i % 2 == 0 ? oddEven +=letters.toLowerCase() : oddEven += letters.toUpperCase()
      }
  capitalizedEvenNum.push(evenOdd)
  capitalizedEvenNum.push(oddEven)
  return capitalizedEvenNum
  
};



console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);