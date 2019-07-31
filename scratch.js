String.prototype.yell = function() {
  return this.toUpperCase() + '!!!!'
}


let name = 'jonas'

name.yell()
console.log(name.yell());


String.prototype.toArray = function(){
  return [this]
}

let myName = 'Jonas'


let some = 'alkdjfajdflkajfkj'

 let more = some.split('').map((letters, i) => ({letters,i}))

 console.log(more);
 




