function isValidSudoku(board) {
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let boxes = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];

            if (val === '.') continue;

            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }

            rows[i].add(val);
            cols[j].add(val);
            boxes[boxIndex].add(val);
        }
    }

    return true;
}

console.log(isValidSudoku([
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]));
