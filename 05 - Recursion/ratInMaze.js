// GFG

// Rat in a Maze Problem - I
// MediumAccuracy: 35.75%Submissions: 155K+Points: 4
// Lamp
// This problem is part of GFG SDE Sheet. Click here to view more.

// Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
// Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.

// Example 1:

// Input:
// N = 4
// m[][] = {{1, 0, 0, 0},
//          {1, 1, 0, 1},
//          {1, 1, 0, 0},
//          {0, 1, 1, 1}}
// Output:
// DDRDRR DRDDRR
// Explanation:
// The rat can reach the destination at
// (3, 3) from (0, 0) by two paths - DRDDRR
// and DDRDRR, when printed in sorted order
// we get DDRDRR DRDDRR.

// Example 2:

// Input:
// N = 2
// m[][] = {{1, 0},
//          {1, 0}}
// Output:
// -1
// Explanation:
// No path exists and destination cell is
// blocked.

// Your Task:
// You don't need to read input or print anything. Complete the function printPath() which takes N and 2D array m[ ][ ] as input parameters and returns the list of paths in lexicographically increasing order.
// Note: In case of no path, return an empty list. The driver will output "-1" automatically.

// Expected Time Complexity: O((3N^2)).
// Expected Auxiliary Space: O(L * X), L = length of the path, X = number of paths.

// Constraints:
// 2 ≤ N ≤ 5
// 0 ≤ m[i][j] ≤ 1

function createVisitedMatrix(N) {
  let visited = [],
    temp = [];

  for (let i = 0; i < N; i++) {
    temp.push(false);
  }

  for (let i = 0; i < N; i++) {
    visited.push([...temp]);
  }

  return visited;
}

function solve(
  maze,
  possibleSolution,
  output,
  rowNumber,
  colNumber,
  visited,
  N
) {
  //base case
  if (rowNumber === N - 1 && colNumber === N - 1) {
    possibleSolution.push([...output]);
  }

  // lexical order is is down -> left -> right -> up

  //check if down possible
  // console.log('down', rowNumber, colNumber);
  if (
    rowNumber + 1 < N &&
    visited[rowNumber + 1][colNumber] === false &&
    maze[rowNumber + 1][colNumber] === 1
  ) {
    // mark element as visited
    visited[rowNumber][colNumber] = true;
    // add path
    output.push('D');
    // make recursive call , increase row number
    solve(maze, possibleSolution, output, rowNumber + 1, colNumber, visited, N);
    // backtracking
    output.pop();
    visited[rowNumber][colNumber] = false;
  }

  //check if left possible
  // console.log('left', rowNumber, colNumber);
  if (
    colNumber - 1 >= 0 &&
    visited[rowNumber][colNumber - 1] === false &&
    maze[rowNumber][colNumber - 1] === 1
  ) {
    // mark element as visited
    visited[rowNumber][colNumber] = true;
    // add path
    output.push('L');
    // make recursive call , increase row number
    solve(maze, possibleSolution, output, rowNumber, colNumber - 1, visited, N);
    // backtracking
    output.pop();
    visited[rowNumber][colNumber] = false;
  }
  //check if right possible
  // console.log('right', rowNumber, colNumber);
  if (
    colNumber + 1 < N &&
    visited[rowNumber][colNumber + 1] === false &&
    maze[rowNumber][colNumber + 1] === 1
  ) {
    // mark element as visited
    visited[rowNumber][colNumber] = true;
    // add path
    output.push('R');
    // make recursive call , increase row number
    solve(maze, possibleSolution, output, rowNumber, colNumber + 1, visited, N);
    // backtracking
    output.pop();
    visited[rowNumber][colNumber] = false;
  }
  //check if up possible
  // console.log('up', rowNumber, colNumber);
  if (
    rowNumber - 1 >= 0 &&
    visited[rowNumber - 1][colNumber] === false &&
    maze[rowNumber - 1][colNumber] === 1
  ) {
    // mark element as visited
    visited[rowNumber][colNumber] = true;
    // add path
    output.push('U');
    // make recursive call , increase row number
    solve(maze, possibleSolution, output, rowNumber - 1, colNumber, visited, N);
    // backtracking
    output.pop();
    visited[rowNumber][colNumber] = false;
  }
}

function solveMaze(maze, N) {
  let output = [],
    possibleSolution = [],
    rowNumber = 0,
    colNumber = 0;

  visited = createVisitedMatrix(N);

  solve(maze, possibleSolution, output, rowNumber, colNumber, visited, N);
  return possibleSolution;
}

let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
console.log(solveMaze(maze, 4));
