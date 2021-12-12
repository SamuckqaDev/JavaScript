//Map function return a new array with different positions;
const nums = [1, 2, 3, 4, 5];

//return a new array with values multiplecated 2;
let result = nums.map((value) => {
  return value * 2;
});

//sum 10
const sum10 = (e) => e + 10;

//multiplecated 3
const triple = (e) => e * 3;

//transformating to "brasilian real";
const amount = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

//var result same a new array;
result = nums.map(sum10).map(triple).map(amount);

console.log(result);
