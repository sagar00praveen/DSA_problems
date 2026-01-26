function evalRPN(tokens) {
  let stack = [];
  for (let t of tokens) {
    if (t === '+') stack.push(stack.pop() + stack.pop());
    else if (t === '-') { let a = stack.pop(); stack.push(stack.pop() - a); }
    else if (t === '*') stack.push(stack.pop() * stack.pop());
    else if (t === '/') { let a = stack.pop(); stack.push(Math.trunc(stack.pop() / a)); }
    else stack.push(Number(t));
  }
  return stack[0];
}