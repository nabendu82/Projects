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