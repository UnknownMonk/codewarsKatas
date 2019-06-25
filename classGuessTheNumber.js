class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
    
  }

  guess(n) {
    if(n === this.number){
      return true
    }

    
    if(n != this.number && this.life != 0){
      this.lives -1
      return false
    }else if(this.life == 0){
      return Error('error already dead')
    }
  }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(10));
console.log(guesser.guess(10));
console.log(guesser.guess(10));
guesser.guess(10);
console.log(guesser.guess(10));
