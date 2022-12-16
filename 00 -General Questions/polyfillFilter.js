Array.prototype._filter = function (callback) {
  const filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    } else continue;
  }
  return filteredArray;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9]._filter((ele) => ele % 2 === 0));
