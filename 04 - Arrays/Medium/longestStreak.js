function findLongestConseqSubseq(arr) {
  // code here
  const theSet = new Set(arr);
  let maximum = 0,
    currentMax = 1;
  for (let i = 0; i < arr.length; i++) {
    if (!theSet.has(arr[i] - 1)) {
      let nextEle = arr[i] + 1;
      while (theSet.has(nextEle)) {
        currentMax += 1;
        nextEle += 1;
      }
      if (currentMax >= maximum) {
        maximum = currentMax;
        currentMax = 1;
      }
    }
  }
  return maximum;
}

console.log(
  findLongestConseqSubseq([
    6, 6, 2, 3, 1, 4, 1, 5, 6, 2, 8, 7, 4, 2, 1, 3, 4, 5, 9, 6,
  ])
);
