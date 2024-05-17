let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Starburst", price: 4.79 },
    { product: "Kit Kat", price: 3.89 },
    { product: "Sour Patch", price: 1.89 },
    { product: "Jelly Belly", price: 2.79 },
    { product: "Milky Way", price: 5.99 },
    { product: "Hershey Kiss", price: 8.89 },
    { product: "Skittles", price: 2.59 },
    { product: "Snickers", price: 2.79 },
    { product: "Gummy Bears", price: 5.79 },
    { product: "Twix", price: 3.89 },
  ];

  // Which candies costs less than $4.00?
let productNames = products.filter((product) => product.price < 4.00).forEach(product => console.log(product.product  +  product.price));

// Which candies has "M&M" its name?
let candyMM = products.filter((product) => product.product.indexOf("M&M") !=-1);
console.log(candyMM);
// Do we carry "Swedish Fish"?
let productName = "Swedish fish";
let position