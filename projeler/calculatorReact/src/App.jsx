import './App.css'



function Header() {
  return (
    <div class="header">
      <h2>calc</h2>
      <div class="themes">
        <div class="theme-numbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div class="theme-select">
          <p>TEMA</p>
          <div class="theme-selected"><img src="/img/Oval.png" alt="oval şekil" /></div>
        </div>
      </div>
    </div>
  )
}

function Input() {
  return (
    <input type="datetime" name="" id="" />

  )
}

function Calculations() {
  return (
    <div class="calculations">
      <button class="numbers">7</button>
      <button class="numbers">8</button>
      <button class="numbers">9</button>
      <button class="numbers">SİL</button>
      <button class="numbers">4</button>
      <button class="numbers">5</button>
      <button class="numbers">6</button>
      <button class="numbers">+</button>
      <button class="numbers">1</button>
      <button class="numbers">2</button>
      <button class="numbers">3</button>
      <button class="numbers">-</button>
      <button class="numbers">.</button>
      <button class="numbers">0</button>
      <button class="numbers">/</button>
      <button class="numbers">x</button>
      <button class="double">SIFIRLA</button>
      <button class="double">=</button>
    </div>
  )
}


function App() {


  return (
    <>
      <Header />
      <Input />
      <Calculations />

    </>
  )
}

export default App
