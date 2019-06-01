function calc(expr) {
  // TODO: Your awesome code here
  const input = expr.split(' ');
  const stack = [];
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };

  for (let i = 0; i < input.length; i++) {
    const token = input[i];
    if (operations[token]) {
      const rightValue = stack.pop();
      const leftValue = stack.pop();
      const result = operations[token](+leftValue, +rightValue);
      stack.push(result);
    } else {
      stack.push(token);
    }
  }

  return stack.pop();
}

calc('1 3 +');
