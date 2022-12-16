// 69. Sqrt(x)
// Easy
// ? THIS PROBLEM SHOULD ONLY BE SOLVED BY BINARY SEARCH

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// Example 1:

// Input: x = 4
// Output: 2

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

// Constraints:

//     0 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
function binarySearch(target) {
  let start = 0,
    end = target;
  let mid = Math.floor(start + (end - start) / 2);
  let ans;
  while (start <= end) {
    let square = mid * mid;

    if (square === target) return mid;
    if (square < target) {
      //   ans = ans + 1;
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return ans;
}
var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  return binarySearch(x);
};

console.log(mySqrt(4));
