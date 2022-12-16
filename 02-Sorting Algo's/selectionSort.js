// ALGORITHM FOR sELECTION sORT

/**
 * @param {number[]} unsorted array
 * @return {number[]} sorted array using selection sort
 */
function selectionSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  // let sortedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    // swap(minIndex, i, arr);
    // sortedArray.push(arr[minIndex]);
  }
  return arr;
}

console.log(selectionSort([4, 10, 1, 3, 100, -100]));
