let incrementString = str =>
  str.replace(/([0-8]|\d?9+)?$/, e => (e ? +e + 1 : 1));

console.log(incrementString('foobar000'), 'foobar001');
console.log(incrementString('foo'), 'foo1');
console.log(incrementString('foobar001'), 'foobar002');
console.log(incrementString('foobar99'), 'foobar100');
console.log(incrementString('foobar099'), 'foobar100');
console.log(incrementString(''), '1');
