var subsets = function (nums) {
  let powerSet = [];
  var calculateSet = function (index, nums, answer) {
    // base case
    if (index === nums.length) {
      // console.log(answer);
      powerSet.push(answer.slice());
      return;
    }

    //include
    let element = nums[index];
    answer.push(element);
    calculateSet(index + 1, nums, answer);
    //exclude
    answer.pop();
    calculateSet(index + 1, nums, answer);
  };

  calculateSet(0, nums, []);
  return powerSet;
};
console.log(subsets([1, 2, 3]));
// var calculateSet = function (nums, answer, index, powerSet) {
//   // base case
//   if (index === nums.length) {
//     powerSet.push(answer);
//     return;
//   }

//   //include
//   let element = nums[index];
//   answer.push(element);
//   calculateSet(nums, answer, index + 1, powerSet);
//   //exclude
//   answer.pop();
//   calculateSet(nums, answer, index + 1, powerSet);
// };
// var subsets = function (nums) {
//   let powerSet = [];
//   let index = 0;
//   let answer = [];
//   calculateSet(nums, answer, index, powerSet);
//   return powerSet;
// };
// console.log(subsets([1, 2, 3]));
