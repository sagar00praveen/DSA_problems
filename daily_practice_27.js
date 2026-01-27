function generateParenthesis(n) {
  let res = [];
  function backtrack(s, open, close) {
    if (s.length === n * 2) { res.push(s); return; }
    if (open < n) backtrack(s + "(", open + 1, close);
    if (close < open) backtrack(s + ")", open, close + 1);
  }
  backtrack("", 0, 0);
  return res;
}