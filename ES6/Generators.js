//Check all the code in https://stephengrider.github.io/JSPlaygrounds/
function* number() {
  yield;
}

const gen = number();
gen.next();
gen.next();


//Complicated example
function* shopping() {
  const stuffFromStore = yield 'cash';
  const cleanClothes = yield 'laundry';
  return [stuffFromStore, cleanClothes];
}

const gen = shopping();
gen.next();
gen.next('groceries');
gen.next('clean clothes');

//Real use with for of loop
function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
myColors;

//Practical use
const testingTeam = {
  lead: 'Amandeep',
  tester: 'Sandeep',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Nabs',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
  
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
names;