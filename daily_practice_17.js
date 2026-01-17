function isPalindromeStr(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let l = 0, r = s.length - 1;
  while (l < r) if (s[l++] !== s[r--]) return false;
  return true;
}