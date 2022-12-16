/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const cols = matrix[0].length;
  const rows = matrix.length;
  let rowRef = new Array(rows);
  let colRef = new Array(cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowRef[j] = 0;
        colRef[i] = 0;
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (colRef[i] === 0 || rowRef[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
};

let mat = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(mat);
console.log(mat);
