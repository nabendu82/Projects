//ES5 way
function addNumbers(a,b,c,d,e) {
  const numbers = [a, b, c, d, e];
  return numbers.reduce(function(sum, number){
    return sum + number;
  },0);
}

console.log(addNumbers(1, 2, 3, 4, 5));

//ES6 way with rest operator
//Changes arguments to array
function addNumbersNew(...numbers) {
  return numbers.reduce((sum, number) => sum + number);
}

console.log(addNumbersNew(1, 2, 3, 4, 5, 7, 8, 9));
console.log(addNumbersNew(1, 2, 3, 4, 5));


//ES5 way
const defaultColors = ['red', 'green'];
const favColors = ['orange', 'yellow'];

console.log(defaultColors.concat(favColors));

//ES6 way
//Spread operator to join array
//Also can add new elements
console.log(['blue', 'black', ...defaultColors, ...favColors]);

//Combined example of rest and spread operator
//Add milk to our shopping list if we forget to include
function validateShoppingList(...items) { //rest operator
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items]; //spread operator
  }
  return items;
}

console.log(validateShoppingList('oranges', 'egg', 'apples'));
console.log(validateShoppingList('milk', 'chicken', 'fish'));