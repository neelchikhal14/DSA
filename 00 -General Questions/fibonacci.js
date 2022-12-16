function calcSeq(prevTerm, nextTerm, index, limit, seqArr) {
  // base case
  if (limit - 2 === index) return;

  let sum = prevTerm + nextTerm;
  prevTerm = nextTerm;
  nextTerm = sum;
  seqArr.push(sum);
  // recursive call
  calcSeq(prevTerm, nextTerm, index + 1, limit, seqArr);
}

// limit - how many fib sequence you want
function fib(limit) {
  let seqArr = [0, 1],
    index = 0;

  calcSeq(0, 1, index, limit, seqArr);

  return seqArr;
}

console.log(fib(10));
