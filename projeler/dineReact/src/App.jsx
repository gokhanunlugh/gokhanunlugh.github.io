
import './App.css'



function Header() {
  return (
    <div className="header" >
    <div className="header-content">
      <img src="/img/dine.svg" alt=""/>
      <h1>Exquisite dining <br/>since 1989</h1>
      <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of
        our farmhouse.</p>
      <a href="#" className="header-btn">BOOK A TABLE</a>
    </div>
  </div>
  )
}

function Information() {
  return (
    <div className="information">
    <img src="/img/mplace.png" alt="" className="place-mobile"/>/
    <img src="/img/place-tablet.png" alt="" className="place-tablet"/>
    <img src="/img/place-desktop.png" alt="" className="place-desktop"/>
    <div className="information-text">
      <img src="/img/Group 7.svg" alt=""/>
      <h2>Enjoyable place for all the family</h2>
      <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of
        the farm before your meal.</p>
    </div>
  </div>
  )
}

function InformationNext() {
  return (
    <div className="information-next">
    <img src="/img/mobile-sourced-food.png" className="chef-foto-mobile" alt=""/>
    <img src="/img/tablet-sourced-food.png" className="chef-foto-tablet" alt=""/>
    <img src="/img/sourced-food.png" className="chef-foto-desktop" alt=""/>
    <div className="information-next-text">
      <img src="/img/Group 7.svg" alt=""/>
      <h2>Enjoyable place for all the family</h2>
      <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of
        the farm before your meal.</p>
    </div>
  </div>
  )
}


function Menu() {
  return (
    <div className="menu">
      <div className="menu-text">
        <img src="/img/Group 7.svg" alt=""/>
        <h2>A few highlights from our menu</h2>
        <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is
          revamped every season.</p>
      </div>
      <div className="menu-container">
        <div className="menu-content">
          <img src="/img/Bitmap (3).png" alt=""/>/
          <div className="menu-content-text">
            <h2>Seared Salmon Fillet</h2>
            <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
          </div>
        </div>
        <hr/>
        <div className="menu-content">
          <img src="/img/Bitmap (4).png" alt=""/>
          <div className="menu-content-text">
            <h2>Rosemary Filet Mignon</h2>
            <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
          </div>
        </div>
        <hr/>
        <div className="menu-content">
          <img src="/img/Group Copy (1).jpg" alt=""/>
          <div className="menu-content-text">
            <h2>Summer Fruit Chocolate Mousse</h2>
            <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


function Reservation() {
  <div className="reservation">
  <div className="reservation-content">
    <h2>Ready to make a reservation?</h2>
    <a href="#" className="reservation-btn">BOOK A TABLE</a>
  </div>
</div>
}

function Footer() {
  return (
    <div className="footer">
    <div className="footer-content">
      <img src="/img/dine.svg" alt=""/>
      <div className="footer-content-text">
        <p className="first-contact">Marthwaite, Sedbergh <br/> Cumbria <br/> +00 44 123 4567</p>
        <p>OPEN TIMES <br/> MON - FRI: 09:00 AM - 10:00 PM <br/> SAT - SUN: 09:00 AM - 11:30 PM</p>
      </div>
    </div>
  </div>
  )
}



function App() {
  return (
    <>
      <Header />
      <Information />
      <InformationNext />
      <Menu />
      <Reservation />
      <Footer />

    </>
  )
  
}

export default App
