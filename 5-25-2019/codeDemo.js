function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;

  while (S > 0) {
    count++;

    if (S % 2 == 0) {
      S = S / 2;
    } else {
      S = S - 1;
    }
  }
  
console.log(count);

  return count;
}

function hex2bin(hex){
  return (parseInt(hex, 16).toString(2)).padStart(8, '0');
}
console.log(~111.1011100);
 


function solution(S) {
  
  let digit = parseInt(S, 2);
 
 
  
   let count = 0;
 
   while (digit > 0) {
     count++;
 
     if (digit % 2 == 0) {
       digit = digit / 2;
     } else {
       digit = digit - 1;
     }
     
     
   }
   
   
   return count;
 }
 solution('011100');

 function bubbleSort(arr){
  n = arr.length
  for (let i = 0; i < n; i++) {
    console.log(n);
    
    for (let j = 0; j < n -i -1 ; j++) {
      console.log( n -i -1 );
      
      
    }
  }
 }
    

    bubbleSort([1,2,3,4,5,])