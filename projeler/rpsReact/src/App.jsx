import './App.css'




function Header() {
  return (
    <div className="header">
      <div className="score">
        <div className="title">
          <h3>Taş <br />
            Kağıt <br />
            Makas</h3>
        </div>
        <div className="score-count">
          <p>Skor</p>
          <h1 className="counter">0</h1>
        </div>
      </div>
    </div>
  )
}




function GameHtml() {
  return (
    <div className="game">
      <button className="paper"><img src="/img/kagıt.png" alt="" /></button>
      <button className="scissors"><img src="/img/makas.png" alt="" /></button>
      <button className="rock"><img src="/img/tas.png" alt="" /></button>
    </div>
  )
}


function GameResult() {
  return (
    <>
      <div className="game-result">
        <div className="choice">
        </div>
        <div className="result">
          <h1 className="result-text"></h1>
          <button className="again">Tekrar Oyna</button>
        </div>
        <div className="comp-choice">
        </div>


      </div>
    </>
  )
}


function Rules() {
  function showModal(){
    let modal = document.querySelector('#modal')
    if(modal){
      modal.showModal();
    }
  }
  function closeModal(){
    let modal = document.querySelector('#modal')
    if(modal){
      modal.close();
    }
  }
  return (
    <><button id="rules" onClick={()=> showModal()} className="rules">KURALLAR</button>
      <dialog onClick={()=> closeModal()}  id="modal">
        <img src="/img/rules.png" alt=""/>
      </dialog>
    </>


  )
}








function App() {

  return (
    <>
      <Header />
      <GameHtml />
      <GameResult />
      <Rules />

    </>
  )
}

export default App
