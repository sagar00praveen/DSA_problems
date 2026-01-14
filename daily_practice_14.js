function topKFrequent(nums, k) {
  let map = {};
  nums.forEach(n => map[n] = (map[n] || 0) + 1);
  return Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k);
}