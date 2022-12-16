/**
 * @param {number[]} unsorted array
 * @return {number[]} sorted array using selection sort
 */
function insertionSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      //perform swap
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([4, 10, 1, 3, 100, -100]));
