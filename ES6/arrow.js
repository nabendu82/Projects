//ES5
var add = function(a, b) {
  return a + b;
}

console.log(add(1, 2));

//ES6
//For single line return
const minus = (a,b) => a - b; 

console.log(minus(3, 2));

//For single line return with single argument
const doubled = number => 2 * number;

console.log(doubled(8));

//For single line return with no argument
const printName = () => console.log(`Name is Anthony`);

console.log(printName());

//For multiline return
const divide = (a, b) => {
  const temp = a / b;
  return temp;
}

console.log(divide(10,5));

//map with fat arrow
const numbers = [1 ,2, 3, 4, 5];

const withES5 = numbers.map(function(number) {
  return 2 * number;
});

console.log(withES5);

const withES6 = numbers.map(number => 3 * number);

console.log(withES6);

//ES5 this issue
const team = {
  members: ['Nabs', 'Shikha'],
  teamName: 'Super Hriday',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`
    });
  }
};

console.log(team.teamSummary());

const solution1 = {
  members: ['Nabs', 'Shikha'],
  teamName: 'Super Hriday',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`
    }.bind(this));
  }
};

console.log(solution1.teamSummary());

const solution2 = {
  members: ['Nabs', 'Shikha'],
  teamName: 'Super Hriday',
  teamSummary: function() {
    var self = this;
    return this.members.map(function(member) {
      return `${member} is on team ${self.teamName}`
    });
  }
};

console.log(solution2.teamSummary());

const ES6solution = {
  members: ['Nabs', 'Shikha'],
  teamName: 'Super Hriday',
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`
    });
  }
};

console.log(ES6solution.teamSummary());