var computers = [
  { name: 'Apple', ram: 20 },
  { name: 'Compaq', ram: 8 },
  { name: 'Sony', ram: 18 },
  { name: 'Lenovo', ram: 25 }
];

//Every computer is more then 16 GB. Then return true
computers.every(function(computer) {
  return computer.ram > 16;
});

//Some computer is more then 16 GB. Then return true
computers.some(function(computer) {
  return computer.ram > 16;
});

// Form validation
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthday = new Field("22/10/1982");
var gender = new Field("Male");

//Without every the && logic get's increased with new fields
username.validate() && password.validate() && birthday.validate() && gender.validate()

//With every
var fields = [username, password, birthday, gender];

var formValidation = fields.every(function(field){
  return field.validate();
});

console.log("Form validation is ", formValidation);

//Given an array of users, return 'true' if every user has submitted a request form.
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted;
});

console.log("All users submitted form is ", hasSubmitted);

//Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'.
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request){
    return request.status === 'pending';
});

console.log("Some request pending is ", inProgress);
