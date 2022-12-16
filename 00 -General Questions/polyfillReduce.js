Array.prototype._reduce = function (cb, initVal) {
  let resultantValue = initVal;

  for (let i = 0; i < this.length; i++) {
    resultantValue = initVal ? cb(resultantValue, this[i], i, this) : this[i];
  }

  return resultantValue;
};

console.log(
  [1, 2, 3, 4]._reduce((acc, curr) => {
    return (acc += curr);
  }, 1)
);
