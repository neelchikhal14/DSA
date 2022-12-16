var minEatingSpeed = function (piles, h) {
  let start = 0;
  const pilesLength = piles.length;
  let max = -1;
  for (let i = 0; i < pilesLength; i++) {
    if (piles[i] >= max) max = piles[i];
  }
  let end = max,
    mid = Math.floor(start + (end - start) / 2);

  //   function requiredHrs(arr, speed) {
  //     let sum = 0;
  //     for (let i = 0; i < pilesLength; i++) {
  //       if (arr[i] % speed === 0) sum += parseInt(arr[i] / speed);
  //       else sum += parseInt(arr[i] / speed) + 1;
  //     }
  //     return sum;
  //   }
  const requiredHrs = (speed) =>
    piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);
  let minHrs = 0;
  while (start <= end) {
    let totalHrs = requiredHrs(mid);

    if (totalHrs > h) start = mid + 1;
    else if (totalHrs <= h) {
      minHrs = mid;
      end = mid - 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return minHrs;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
// console.log(15 / 2);

console.log(Math.ceil(4 / 2));
console.log(Math.ceil(13 / 2));
