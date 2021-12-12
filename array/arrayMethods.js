//array
const pilots = [ "Vettel", "Alonso", "Raikkonen", "Massa"]

//Remove last array element;
pilots.pop()
console.log(pilots)

//Push new value to array;
pilots.push("Verstappen")
console.log(pilots)

//Remove first value to array;
pilots.shift()
console.log(pilots)

//Add new value first position array;
pilots.unshift("Tomimatsu")
console.log(pilots)

//Remove or add;
//splice('poition', 'removes', 'adds');
pilots.splice(2, 0, "Adriano", "Samuel")
console.log(pilots)

pilots.splice(0, 1) // Tomimatsu is break :(
console.log(pilots)

//return a new Array;
const somePilots = pilots.slice(2)
console.log(somePilots)

//1 until 5
const somePilots2 = pilots.slice(1, 5)
console.log(somePilots2)


