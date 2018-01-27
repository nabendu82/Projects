//ES5 classes with Constructor and Prototype
/*
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

//Inheritance with ES5
function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily drive' });

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
*/

//ES6 classes - refactoring above code
class Car {
  constructor({ title }) {
    this.title = title;
  }  
  drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  honk() {
    return 'beep';
  }  
}

const toyota = new Toyota({ color: 'red', title: 'Daily drive' });

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());