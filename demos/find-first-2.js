let menu = [
  { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
  { id: 2, item: "Burger", category: "Meal", price: 7.29 },
  { id: 3, item: "Salad", category: "Meal", price: 8.29 },
  { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
  { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

function find4() {
  if (item.Id == 4) {
    return true;
  } else {
    return false;
  }
}

let foundItem = menuItem.find(find4);
//for (const item of menuItems) {
//if (item.id == 4) {
//foundItem = item;
//break;
//}
//}
console.log(foundItem);
