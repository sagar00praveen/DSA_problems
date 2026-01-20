function maxProfit(prices) {
  let min = Infinity, max = 0;
  for (let p of prices) {
    min = Math.min(min, p);
    max = Math.max(max, p - min);
  }
  return max;
}