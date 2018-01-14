var products = [
  {name: 'cucumber', type: 'vegetable'},
  {name: 'banana', type: 'fruit'},
  {name: 'carrot', type: 'vegetable'},
  {name: 'mango', type: 'fruit'}
];

var filteredProducts = [];

for(var i=0; i<products.length; i++){
  if(products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

var filterPro = products.filter(function(product){
  return product.type === 'fruit';
});

console.log(filterPro);

//real usage
var post = { id :4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'It was ok' },
  { postId: 4, content: 'awful post' },
  { postId: 2, content: 'total crap' }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
  	return post.id === comment.postId;
  });  
}

commentsForPost(post, comments);

//Filter the array of users, only returning users who have admin level access. 
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
    return user.admin;
});