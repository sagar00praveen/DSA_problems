function cloneGraph(node) {
  if(!node) return null;
  let map = new Map();
  function dfs(n) {
    if(map.has(n)) return map.get(n);
    let clone = { val: n.val, neighbors: [] };
    map.set(n, clone);
    for(let neighbor of n.neighbors) clone.neighbors.push(dfs(neighbor));
    return clone;
  }
  return dfs(node);
}