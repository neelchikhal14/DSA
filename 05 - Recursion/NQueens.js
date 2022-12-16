// 51. N-Queens
// Hard
// 8.9K
// 197
// Companies

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

//

// Example 1:

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

// Example 2:

// Input: n = 1
// Output: [["Q"]]

//

// Constraints:

//     1 <= n <= 9

/**
 * @param {number} n
 * @return {string[][]}
 */

function checkIsSafe(board, n, rowNumber, colNumber) {
  // since we are moving from left to right col wise to check a safe place we need to only check
  // left upward diagonal , right to left and left bottom diagonal

  let result = true;
  // left upper diagonal
  let tempRow = rowNumber,
    tempCol = colNumber;

  while (tempRow >= 0 && tempCol >= 0) {
    if (board[tempRow][tempCol] === 'Q') return false;
    tempRow -= 1;
    tempCol -= 1;
  }

  // right to left
  tempRow = rowNumber;
  tempCol = colNumber;
  while (tempCol >= 0) {
    if (board[tempRow][tempCol] === 'Q') return false;

    tempCol -= 1;
  }

  // left bottom diagonal
  tempRow = rowNumber;
  tempCol = colNumber;
  while (tempRow < n && tempCol >= 0) {
    if (board[tempRow][tempCol] === 'Q') return false;
    tempRow += 1;
    tempCol -= 1;
  }
  return result;
}

function initMatrix(n) {
  let matrix = [];
  let tempArr = [];
  for (let i = 0; i < n; i++) {
    tempArr.push('.');
  }
  for (let i = 0; i < n; i++) {
    matrix.push([...tempArr]);
  }
  return matrix;
}

function solve(board, n, colIndex, possibleCombos) {
  // base case
  if (colIndex === n) {
    console.log('possible', [...board]);
    possibleCombos.push([...board]);
    console.log(possibleCombos);
    return;
  }

  // iterating thru rows one col at a time
  for (let row = 0; row < n; row++) {
    // check
    if (checkIsSafe(board, n, row, colIndex)) {
      // element can be placed
      board[row][colIndex] = 'Q';
      //recursive call, we need to increase col
      solve(board, n, colIndex + 1, possibleCombos);
      //backtracking, make the element from 'Q' to '.'
      board[row][colIndex] = '.';
    }
  }
}
var solveNQueens = function (n) {
  // zero indexed based number of rows and cols
  let colIndex = 0,
    possibleCombos = [];

  board = initMatrix(n);
  //   console.log(board);
  solve(board, n, colIndex, possibleCombos);
  console.log(possibleCombos);
  // return possibleCombos;
};

console.log(solveNQueens(4));
