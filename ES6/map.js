var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i=0; i<numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled);
console.log(doubledNumbers);

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
});

console.log(heights);

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    return trip.distance/trip.time;
});

console.log(speeds);

function pluck(array, property) {
    return array.map(function(arr){
       return arr[property]; 
    });
    
}

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); 