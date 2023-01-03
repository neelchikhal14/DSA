function floorAndCeil(arr, target) {
  // edge conditions
  let currentMin = null;
  let currentMax = null;
  let floorIndex = -1;
  let ceilIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    // positive differences
    if (target - arr[i] > 0) {
      if (currentMin === null) currentMin = target - arr[i];
      if (currentMin > target - arr[i]) {
        currentMin = target - arr[i];
        floorIndex = i;
      }
    }
    //negative differences
    else {
      if (target - arr[i] === 0) continue;
      if (currentMax === null) currentMax = target - arr[i];
      if (target - arr[i] >= currentMax) {
        currentMax = target - arr[i];
        ceilIndex = i;
      }
    }
  }
  if (floorIndex < 0 && ceilIndex < 0) return [-1, -1];
  if (floorIndex < 0 && ceilIndex >= 0) return [-1, arr[ceilIndex]];
  if (floorIndex >= 0 && ceilIndex < 0) return [arr[floorIndex], -1];

  return [arr[floorIndex], arr[ceilIndex]];
}

console.log(floorAndCeil([5, 50], 100));
