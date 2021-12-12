const shoppingCart = [
  '{"name": "Borrcaha", "price": 3.45}',
  '{"name": "Lápis", "price": 5.00}',
];

//converting string to JSON;
const toObject = (json) => JSON.parse(json);

//filter just object price;
const justPrice = (product) => product.price;

//Verify object array and return just price;
const result = shoppingCart.map(toObject).map(justPrice);

console.log(result);
