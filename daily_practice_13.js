function groupAnagrams(strs) {
  let map = {};
  for (let s of strs) {
    let key = s.split('').sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
}