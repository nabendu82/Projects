var posts = [
  { id: 1, title: 'New Post'},
  { id: 2, title: 'Super Post'},
  { id: 3, title: 'Oldest Post'},
  { id: 4, title: 'Old Post'},
  { id: 5, title: 'Newest Post'}  
];

var comment = { postId: 1, content: 'Great article'};

function postForComment(posts, comment) {
  return posts.find(function(post){
    return post.id === comment.postId;
  })
}

postForComment(posts, comment);

//Find the user in the users's array who is an admin. 

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin;
});

console.log(admin);

//Your goal: Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.

function findWhere(array, criteria) {
    return array.find(function(arr){
        var search = Object.keys(criteria);
        return arr[search] == criteria[search];
    });
  
}

var ladders = [
  { id: 1, height: 20 },
  { id: 4, height: 18 },
  { id: 2, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 });