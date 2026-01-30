function searchMatrix(matrix, target) {
  let r = matrix.length, c = matrix[0].length;
  let top = 0, bot = r - 1;
  while (top <= bot) {
    let row = Math.floor((top + bot) / 2);
    if (target > matrix[row][c - 1]) top = row + 1;
    else if (target < matrix[row][0]) bot = row - 1;
    else break;
  }
  if (top > bot) return false;
  let row = Math.floor((top + bot) / 2);
  let l = 0, right = c - 1;
  while (l <= right) {
    let m = Math.floor((l + right) / 2);
    if (target === matrix[row][m]) return true;
    else if (target > matrix[row][m]) l = m + 1;
    else right = m - 1;
  }
  return false;
}