//ES5 way
function makeAjaxRequest(url, method) {
  if(!method) {
    method = 'GET';
  }
  return method;
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'PUT'));


//ES6 way
function makeAjaxRequestNew(url, method='GET') {
  return method;
}

console.log(makeAjaxRequestNew('google.com'));
console.log(makeAjaxRequestNew('google.com', 'POST'));
console.log(makeAjaxRequestNew('google.com', null));
console.log(makeAjaxRequestNew('google.com', undefined));

// ES5 way
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.round(Math.random() * 999999);
}

function createAdminUser(user) {
  user.admin = true;
  return user;
}

console.log(createAdminUser(new User(generateId()))); //Creating a new admin user

//ES6 way
function createAdminUserNew(user = new User(generateId())) {
  user.admin = true;
  return user;
}

console.log(createAdminUserNew()); //Creating a new admin user
const userOld = new User(generateId());
console.log(createAdminUserNew(userOld)); //Promoting old user to admin