function characterReplacement(s, k) {
  let map = {}, maxf = 0, l = 0, max = 0;
  for (let r = 0; r < s.length; r++) {
    map[s[r]] = (map[s[r]] || 0) + 1;
    maxf = Math.max(maxf, map[s[r]]);
    if (r - l + 1 - maxf > k) {
      map[s[l]]--;
      l++;
    }
    max = Math.max(max, r - l + 1);
  }
  return max;
}