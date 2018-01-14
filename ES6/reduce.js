var numbers = [10, 20, 30, 40, 50, 60];

var total = numbers.reduce(function(sum, number){
  return sum + number;  
},0);

console.log('Total is ', total);

var primaryColors = [
  { color: 'red' },
  { color: 'green' },
  { color: 'yellow' },
  { color: 'blue' },
  { color: 'white' },
  { color: 'black' }  
];

var colorArr = primaryColors.reduce(function(previous, primaryColor){
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log('Color array is ', colorArr);

//Balanced Paranthesis - Interview question - Check lecture 22 ES6
function balancedParens(paranString) {
  return !paranString.split("").reduce(function(previous, char){
    if (previous < 0) { return previous; } //edge case of ")("
    if (char === "(") { return ++previous; }
    if (char === ")") {return --previous; }
    return previous; //for cases of any random char like jjjjjj
  }, 0);
}

console.log('((()))', balancedParens("((()))"));
console.log('((())', balancedParens("((())"));
console.log(')(', balancedParens(")("));
console.log('((((', balancedParens("(((("));


//Use the 'reduce' helper to find the sum of all the distances traveled. 
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip){
    return sum + trip.distance;
}, 0);

console.log('Distance travelled', totalDistance);

//Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  
//The object returned should have the form '{ sitting: 3, standing: 2 }'. 

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    if(desk.type === 'sitting') { ++acc.sitting; }
    if(desk.type === 'standing') { ++acc.standing; }
    return acc;
    
}, { sitting: 0, standing: 0 });

console.log('Type of desks ', deskTypes);

//Write a function called 'unique' that will remove all the duplicate values from an array.
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(function(arr,element){
      if(!arr.includes(element)){
          arr.push(element)
      }
      return arr;
  },[]);
}

console.log(unique(numbers));
