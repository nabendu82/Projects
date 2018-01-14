//ES5
var add = function(a, b) {
  return a + b;
}

console.log(add(1, 2));

//ES6
//For single line return
const minus = (a,b) => a - b; 

console.log(minus(3, 2));

//For multiline return
const divide = (a, b) => {
  const temp = a / b;
  return temp;
}

console.log(divide(10,5));