
async function getData(userId) {
  let user = await fetch('https://dummyjson.com/users/' + userId).then(res=> res.json());
  let {todos} = await fetch(`https://dummyjson.com/users/${userId}/todos`).then(res=> res.json()
  );
 

  container.innerHTML +=  `<div class="card">
      <h3>${user.firstName} ${user.lastName}</h3>
      <p>${user.age} ${user.gender}</p>
      <p>${user.email}</p>
      <p>${user.phone}</p>
      <div class="address">
        <p>${user.address.address}</p>
        <p>${user.address.city} / ${user.address.state} / ${user.address.country}</p>
      </div>
      <div class="todo">
        <ul>
        ${todos.map(x=> `<li>Post ${x.id}: ${x.todo} <span class="${x.completed}"></span>`).join('')}
        </ul>
      </div>
    </div>`

    
    


  }


  function init() {
    fetch('https://dummyjson.com/users/').then(res => res.json()).then(res=> {
   ;
    
    length=res.users.length
    for (let i = 1; i <= length; i++) {  
      getData(i);
    }
   })
  }
  
  init();



