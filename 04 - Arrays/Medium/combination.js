var combine = function (n, k) {
  let powerset = [];

  function calculateSubset(index, n, subset) {
    //base case
    if (subset.length === k) {
      powerset.push(subset.slice());
      return;
    }
    for (i = index; i <= n; i++) {
      subset.push(i);
      calculateSubset(i, n, subset);
      subset.pop();
    }
  }
  calculateSubset(1, n, (subset = []));

  return powerset;
};
console.log(combine(20, 16));
