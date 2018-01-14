function getMessage() {
  const year = new Date().getFullYear();
  //ES5 way
  // return "This year is " + year;
  
  //ES6 way
  return `The year is ${year}`;
}

console.log(getMessage());