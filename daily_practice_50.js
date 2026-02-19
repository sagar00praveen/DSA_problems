function exist(board, word) {
  let r = board.length, c = board[0].length;
  function dfs(i, j, k) {
    if (k === word.length) return true;
    if (i < 0 || j < 0 || i >= r || j >= c || board[i][j] !== word[k]) return false;
    let temp = board[i][j];
    board[i][j] = '*';
    let res = dfs(i+1,j,k+1) || dfs(i-1,j,k+1) || dfs(i,j+1,k+1) || dfs(i,j-1,k+1);
    board[i][j] = temp;
    return res;
  }
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) if (dfs(i, j, 0)) return true;
  return false;
}