// sum of first N numbers

function calcSum(sum, N) {
  // base case
  if (N < 1) {
    console.log(sum);
    return;
  }

  // cal sum
  //   sum = sum + N;

  // recursive call
  calcSum(sum + N, N - 1);
}

function sumOfNumbers(N) {
  let sum = 0;

  calcSum(sum, N);
}
sumOfNumbers(10);
