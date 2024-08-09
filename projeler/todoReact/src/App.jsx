
import './App.css'


function TodoForm() {
  return (
    <form class="todoForm">
      <input required type="text" id="todo" name="todo" autocomplete="off" placeholder="Yapılacak iş ekle" /> <button id="add-task"><img src="/img/Vector.svg" alt="" /></button>
    </form>

  )
}

function Tasks() {
  return (
    <div class="tasks">
      <p>Yapılacaklar <button class="reset">Reset</button> </p>
      <ul class="liste activeTodoList"></ul>
    </div>
  )
}

function App() {

  return (
    <>
      <TodoForm />
      <Tasks />
    </>
  )
}

export default App
