//ES5 way
var expense = {
  type: 'Business',
  amount: 'Rs 450'
};

var type = expense.type;
var amount = expense.amount;
console.log(`${type} ${amount}`);

//ES6 way
let expenseNew = {
  typeNew: 'New Business',
  amountNew: 'Dollar 450'
};

const { typeNew, amountNew } = expenseNew;
console.log(`${typeNew} ${amountNew}`);

//ES5 way
let savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14030
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size} MB`;
}

console.log(fileSummary(savedFile));

//ES6 way
function fileSummaryNew({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size} MB`;
}

console.log(fileSummaryNew(savedFile));

//Destructuring array
const companies = [ 'Google', 'Facebook', 'IBM', 'Microsoft'];
const [ name, name1 ] = companies;
console.log(`${name} ${name1}`);
const [ first, ...rest ] = companies;
console.log(`${name} --- ${rest}`);

//Double destructuring - array of Objects
/* Try below in https://stephengrider.github.io/JSPlaygrounds/

const compWithLocation = [
  { name: 'Google', location: 'USA'},
  { name: 'Infosys', location: 'Bangalore'},
  { name: 'TCS', location: 'Mumbai'},
  { name: 'Paytm', location: 'Delhi'}
];

//ES5 way
var location = compWithLocation[0].location;

//ES6 way
const [ { location }] = compWithLocation;
location

//Double destructuring - Object with array
const IBM = {
  locations: ['USA', 'Bangalore', 'Kolkatta', 'Mumbai']
}

//ES5 way
IBM.locations[0]

//ES6 way
const { locations: [ location ]} = IBM;
location;

*/

//Destructuring real use
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

console.log(points.map(([x, y]) => {
  return {x, y};
}));


const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return {subject, time, teacher};
});

console.log(classesAsObject);