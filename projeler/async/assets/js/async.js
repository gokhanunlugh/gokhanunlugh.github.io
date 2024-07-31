


async function getData(postId) {
  let post = await fetch('https://dummyjson.com/post/' + postId).then(res => res.json());
  let {comments} = await fetch(`https://dummyjson.com/post/${postId}/comments`).then(res => res.json());
 
  container.innerHTML += ` <details>
    <summary><h3 id="title">${post.title}</h3></summary>
      <details>
        <summary><p id="body">${post.body}</p></summary>
          <p>${comments.map(x=> `<li>${x.user.fullName} says: ${x.body}</li>`).join('')}</p></details>
  </details>`
}



function init() {
  fetch('https://dummyjson.com/post/').then(res => res.json()).then(res=> {
 ;
  
  length=res.posts.length
  for (let i = 1; i <= length; i++) {  
    getData(i);
  }
 })
}

init();