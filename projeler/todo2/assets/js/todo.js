let todo = document.querySelector('#todo')
let liste = document.querySelector('.liste')
let btn = document.querySelector('#add-task')
let todoForm = document.querySelector('.todoForm');
let reset = document.querySelector('.reset')
let todoList = []
if(localStorage.todoList) {
  todoList = JSON.parse(localStorage.todoList);
  renderTodo();
}

let id = 0;
if (localStorage.id) {
  id = Number(localStorage.id)
}

function generateId() {
  id++;
  localStorage.id = id;
  return id;
}

btn.addEventListener('click', () => {
  modal.classList.remove('editModal');
  document.querySelector('input[name="id"]').value = '';
  modal.showModal();
})




function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(todoForm);
  let formObj = Object.fromEntries(formData);
  todoList.push(formObj); 
  todoForm.reset();

  if(formObj.id !== '') {
    let adres = todoList.find(x => x.id === Number(formObj.id));
    adres.todo = formObj.todo;
  } else {
    formObj.id = generateId();
    todoList.push(formObj);
  }

  save();
  renderTodo();
}


function save() {
  localStorage.todoList = JSON.stringify(todoList);
}
todoForm.addEventListener('submit', handleFormSubmit)



function createTodoHtml(t) {
  modal.close();
  return `<li> ${t.todo} <div><button class="check" data-todoid="${t.id}"><img src="/projeler/todo2/assets/img/Check.svg" alt=""></button>  <button class="remove" data-todoid="${t.id}"><img src="/projeler/todo2/assets/img/Vector(1).svg" alt=""></button></div>  </li> `

}

function handleDeleteBtn(e) {
  e.preventDefault();
  if(!confirm('Emin Misiniz?')){
    return;
  }


  todoList = todoList.filter(x=> x.id !== Number(this.dataset.todoid));

  save();
  renderTodo();
}



function resetLocal() {
  localStorage.clear();
  todoList = [];
  renderTodo();

}

function handleEditBtn(e) {
  e.preventDefault();
  modal.classList.add('editModal');

  let todoId = Number(this.dataset.todoid);
  let todos = todoList.find(x=> x.id === todoId);
  document.querySelector('input[name="id"]').value = todos.id;
  document.querySelector('input[name="todo"]').value = todos.todo;
  modal.showModal();
}




function renderTodo() {
  liste.innerHTML = todoList.map(x=> createTodoHtml(x)).join('');
  document.querySelectorAll('.remove').forEach(x=> x.addEventListener('click', handleDeleteBtn));
  document.querySelectorAll('.check').forEach(x=> x.addEventListener('click', handleEditBtn));
}


reset.addEventListener('click', resetLocal)