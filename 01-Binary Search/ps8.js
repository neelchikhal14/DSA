function count(arr, x) {
  const arrLength = arr.length;
  if (arrLength === 1) {
    if (arr[0] === x) return 1;
    else return 0;
  }
  if (arrLength === 0) return 0;
  let start = 0;
  let end = arrLength - 1;
  let mid = Math.floor(start + (end - start) / 2);
  let firstOcc = -1;
  let lastOcc = -1;

  while (start <= end) {
    if (arr[mid] === x) {
      firstOcc = mid;
      end = mid - 1;
    } else if (x > arr[mid]) start = mid + 1;
    else if (x < arr[mid]) end = mid - 1;

    mid = Math.floor(start + (end - start) / 2);
  }
  start = 0;
  end = arrLength - 1;
  mid = Math.floor(start + (end - start) / 2);
  while (start <= end) {
    if (arr[mid] === x) {
      lastOcc = mid;
      start = mid + 1;
    } else if (x > arr[mid]) start = mid + 1;
    else if (x < arr[mid]) end = mid - 1;

    mid = Math.floor(start + (end - start) / 2);
  }
  if (firstOcc === -1 && lastOcc === -1) return 0;
  return lastOcc - firstOcc + 1;
}

console.log(count([1, 1, 2, 3], 2));
