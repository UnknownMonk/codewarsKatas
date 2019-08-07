String.prototype.yell = function() {
  return this.toUpperCase() + '!!!!';
};

let name = 'jonas';

name.yell();
console.log(name.yell());

String.prototype.toArray = function() {
  return [this];
};

let myName = 'Jonas';

let some = 'alkdjfajdflkajfkj';

let more = some.split('').map((letters, i) => ({ letters, i }));

console.log(more);

let myString = 'string';

let congo = myString.split('').reduce((rev, char) => char + rev, '');
console.log(congo);

let reversed = '';

for (let char of myString) {
  console.log(char);
  reversed = char + reversed;
}
console.log(reversed);
