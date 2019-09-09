const menuItems = [
  'Burger',
  'Fries',
  'Chicken',
  'Pizza',
  'Sandwich',
  'Onionrings',
  'Milkshake',
  'Coke'
];

const menuIndexes = menuItems.reduce((all, item, i) => {
  all[item] = i;
  return all;
}, {});

function getOrder(input) {
  return menuItems.reduce((orderString, menuItem) => {
    const regexp = new RegExp(menuItem.toLowerCase(), 'g');
    const orderItems = input.match(regexp);
    if (orderItems) {
      return (
        orderString + ' ' + (menuItem + ' ').repeat(orderItems.length).trim()
      );
    }
    return orderString;
  }, '');
}

console.log(
  getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'),
  'Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke'
);
console.log(
  getOrder('pizzachickenfriesburgercokemilkshakefriessandwich'),
  'Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke'
);
