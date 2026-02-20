function numIslands(grid) {
  let count = 0;
  for(let i=0; i<grid.length; i++){
    for(let j=0; j<grid[0].length; j++){
      if(grid[i][j] === '1') { count++; dfs(grid, i, j); }
    }
  }
  return count;
  function dfs(g, i, j) {
    if(i<0 || j<0 || i>=g.length || j>=g[0].length || g[i][j]==='0') return;
    g[i][j] = '0';
    dfs(g, i+1, j); dfs(g, i-1, j); dfs(g, i, j+1); dfs(g, i, j-1);
  }
}