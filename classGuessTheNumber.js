class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
    this.count = 0;
  }

  guess(n) {
    if (this.count === 0) {
      this.count = n;

      this.count = this.count - 1;
      this.life = this.live - 1;
      return false;
    }
    this.count = this.count - 1;
    this.life = this.life - 1;
  }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(10));
console.log(guesser.guess(10));
console.log(guesser.guess(10));
guesser.guess(10);
console.log(guesser.guess(10));
