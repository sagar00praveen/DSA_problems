function climbStairs(n) {
  let a = 1, b = 1;
  for(let i=0; i<n-1; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}