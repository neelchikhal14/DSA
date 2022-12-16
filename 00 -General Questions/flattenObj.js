const flatten = (obj, parent = '') => {
  const flattendObj = {};

  const generateFlatObject = (obj, parent) => {
    for (key in obj) {
      const newParent = parent + key;
      const value = obj[key];

      if (typeof value === 'object') {
        generateFlatObject(value, newParent + '.');
      } else {
        flattendObj[newParent] = value;
      }
    }
  };
  generateFlatObject(obj, parent);
  return flattendObj;
};

const theObj = {
  A: '12',
  B: 22,
  C: {
    D: 'Hello World',
    E: function () {
      console.log('Hello');
    },
    F: {
      G: [1, 2, 3, 4],
    },
  },
};

console.log(flatten(theObj));
