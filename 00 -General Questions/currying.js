// sum(1)(2)(3);

//sum function
function infiniteCurry(a) {
  return function (b) {
    if (b) return infiniteCurry(a + b);
    return a;
  };
}

console.log(infiniteCurry(1)(2)(3)());
