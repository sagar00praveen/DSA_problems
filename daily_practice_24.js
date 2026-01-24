function minWindow(s, t) {
  if (!t) return "";
  let map = {}, window = {}, need = 0, have = 0;
  for (let c of t) {
    map[c] = (map[c] || 0) + 1;
    if (map[c] === 1) need++;
  }
  let res = [-1, -1], resLen = Infinity, l = 0;
  for (let r = 0; r < s.length; r++) {
    let c = s[r];
    window[c] = (window[c] || 0) + 1;
    if (map[c] && window[c] === map[c]) have++;
    while (have === need) {
      if (r - l + 1 < resLen) {
        res = [l, r];
        resLen = r - l + 1;
      }
      window[s[l]]--;
      if (map[s[l]] && window[s[l]] < map[s[l]]) have--;
      l++;
    }
  }
  return resLen !== Infinity ? s.slice(res[0], res[1] + 1) : "";
}