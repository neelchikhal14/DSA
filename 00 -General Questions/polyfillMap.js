Array.prototype._map = function (callbackFn) {
  const output = [];
  this.forEach((element, idx) => {
    output.push(callbackFn(element, idx, this));
  });
  return output;
};

theArr = [1, 2, 3, 4, 5, 6];
const newArr = theArr._map((ele, idx) => {
  return ele * idx;
});
console.log(newArr);
