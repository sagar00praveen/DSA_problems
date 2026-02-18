function permute(nums) {
  let res = [];
  if (nums.length === 0) return [[]];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i], rest = nums.slice(0, i).concat(nums.slice(i + 1));
    for (let p of permute(rest)) res.push([n, ...p]);
  }
  return res;
}