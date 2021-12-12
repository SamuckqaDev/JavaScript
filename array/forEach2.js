Array.prototype.forEach2 = (callback) => {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//Array;
const approveds = ["Samuel", "Lucas", "Renata", "Hanna"];

approveds.forEach2((name, index) => {
  console.log(`${index + 1}) ${name}`);
});
