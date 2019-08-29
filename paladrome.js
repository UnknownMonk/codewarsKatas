function isPalindrome(line) {
    let rev = line.toString().split('').reverse().join('')

    if(rev == line){
        return true
    }else{
        return false
    }
  }