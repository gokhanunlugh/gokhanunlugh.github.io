
import './App.css'




function Header() {
  return (
    <div className="header"><img src="/img/SPLITTER.svg" alt="SPLITTER logo" /></div>

  )
}


function Content() {
  return (
    <div className="content">
      <div className="content-bill">
        <div className="bill">
          <p>Hesap</p>
          <input type="number" placeholder="0" className="bill-amount" />
        </div>
        <div className="tip">
          <p>Bahşiş Miktarı %</p>
          <div className="tip-percent">
            <button>5</button>
            <button>10</button>
            <button>15</button>
            <button>25</button>
            <button>50</button>
            <input type="number" placeholder="Özel" className="tip-input" />
          </div>
        </div>
        <div className="bill-split">
          <p>Kişi Sayısı</p>
          <input type="number" placeholder="1" className="split-number" />
        </div>
      </div>
      <div className="total">
        <div className="total-tip">
          <h3>Bahşiş Miktarı: <span className="tip-amount"></span></h3>
          <p>/ kişi</p>
        </div>
        <div className="total-bill">
          <h3>Toplam: <span className="total-amount"></span></h3>
          <p>/ kişi</p>
        </div>
        <button className="reset">SIFIRLA</button>
      </div>
    </div>
  )
}

function App() {

  return (
    <>
      <Header />
      <Content />

    </>
  )
}

export default App
