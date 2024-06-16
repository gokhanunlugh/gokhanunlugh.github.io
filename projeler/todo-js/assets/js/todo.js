let todo = document.querySelector('#todo')
let liste = document.querySelector('.liste')
let btn = document.querySelector('#add-task')
let todoForm = document.querySelector('.todoForm');
let reset = document.querySelector('.reset')
let todoList = []
if(typeof localStorage.todoList !== 'undefined') {
  todoList = JSON.parse(localStorage.todoList);
  addtask();
}






function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(todoForm);
  let formObj = Object.fromEntries(formData);
  todoList.push(formObj); 
  todoForm.reset();


  save();
  addtask();
}


function save() {
  localStorage.todoList = JSON.stringify(todoList);
}

function addtask() {
  liste.innerHTML = '';
  for ( let i = 0; i < todoList.length; i++) {
    liste.innerHTML += `<li> ${todoList[i].todo} <div><button class="check"><img src="/projeler/todo-js/assets/img/Check.svg" alt=""></button>  <button class="remove"><img src="/projeler/todo-js/assets/img/Vector(1).svg" alt=""></button></div>  </li> `  

  }

}

function resetLocal() {
  localStorage.clear();
  todoList = [];
  addtask();

}

todoForm.addEventListener('submit', handleFormSubmit)
reset.addEventListener('click', resetLocal)