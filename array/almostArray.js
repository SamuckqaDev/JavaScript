//simulation array;
const almostArray = {
  0: "Rafael",
  1: "Anna",
  2: "Bia",
};

//Define properties "almostArray" like Object and toString to verify values;
Object.defineProperty(almostArray, "toString", {
  value: () => {
    return Object.values(this)
  },
  enumerable: false,
});

//Access to index[0] = first value;
console.log(almostArray.toString());
