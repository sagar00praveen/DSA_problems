function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  let c1 = Array(26).fill(0), c2 = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    c1[s1.charCodeAt(i) - 97]++;
    c2[s2.charCodeAt(i) - 97]++;
  }
  let matches = 0;
  for (let i = 0; i < 26; i++) if (c1[i] === c2[i]) matches++;
  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true;
    let idx = s2.charCodeAt(r) - 97;
    c2[idx]++;
    if (c1[idx] === c2[idx]) matches++;
    else if (c1[idx] + 1 === c2[idx]) matches--;
    let lIdx = s2.charCodeAt(l) - 97;
    c2[lIdx]--;
    if (c1[lIdx] === c2[lIdx]) matches++;
    else if (c1[lIdx] - 1 === c2[lIdx]) matches--;
    l++;
  }
  return matches === 26;
}