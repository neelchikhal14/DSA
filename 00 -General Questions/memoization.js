const addNums = (a, b, c) => a + b + c;

const memoized = (fn) => {
  const cache = {};
  return function (...args) {
    const argsToString = JSON.stringify(args);
    if (argsToString in cache) {
      console.log('Result found in cache. Fetching result from cache');
      console.log(`${argsToString} = ${cache[argsToString]}`);
      return cache[argsToString];
    } else {
      const result = fn(...args);
      //   const result = fn.apply(this, args);
      console.log('Result not found in cache.Calculating result from fn');
      //   console.log(this);
      cache[argsToString] = result;
      return result;
    }
  };
};

const add = memoized(addNums);

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3));
// console.log(add(2, 3, 4));

// memoized factorial

const factorial = memoized((x) => {
  if (x <= 1) return 1;
  else return x * factorial(x - 1);
});

console.log(factorial(5));
console.log(factorial(6));
