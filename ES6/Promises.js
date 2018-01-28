//Promises
let promise = new Promise((resolve, reject) => {
  resolve();
});

promise
      .then(() => console.log('Finally rendered'))
      .catch(() => console.log('Uhh ho'));

//Fetch

const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
      .then(response => response.json())
      .then(data => {
           return data.map( post => console.log(`${post.title} ----${post.body}`));
        })
      .catch(error => console.log('Something went wrong', error));