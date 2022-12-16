// ALGORITHM FOR MERGE sORT

function mergeArrays(leftArr, rightArr) {
  const output = [];

  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
}

function mergeSort(arr) {
  //base cases
  if (arr.length <= 1) return arr;

  //split array
  let mid = Math.floor(arr.length / 2);

  //create left array
  const leftArr = arr.slice(0, mid);
  //create right array
  const rightArr = arr.slice(mid);

  return mergeArrays(mergeSort(leftArr), mergeSort(rightArr));
}
const arr = [4, 10, 1, 3, 100, -100];
console.log(mergeSort(arr));
