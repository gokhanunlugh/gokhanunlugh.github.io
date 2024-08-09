import './App.css'



function Header() {
  return (
    <div className="header">
      <a href="#"><img src="/assets/img/logo.png" alt="logo" /></a>
      <a href="#" className="btn">Free Consultation</a>
    </div>
  )
}

function HeroText() {
  return (
    <div className="hero-text">
      <h1>Design solutions made easy</h1>
      <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
    </div>
  )
}

function Design() {
  return (
    <div className="designs">
      <div className="graphic-design raidus">
        <img src="/assets/img/graph.svg" alt="" />
        <h3>Graphic Design</h3>
      </div>
      <div className="ui-design raidus">
        <img src="/assets/img/ui.svg" alt="" />
        <h3>UI/UX</h3>
      </div>
      <div className="ui-design app raidus">
        <img src="/assets/img/apps.png" alt="" />
        <h3>Apps</h3>
      </div>
      <div className="illus-design raidus">
        <img src="/assets/img/illust.png" alt="" />
        <h3>Illustrations</h3>
      </div>
      <div className="illus-design photo raidus">
        <img src="/assets/img/photo.png" alt="" />
        <h3>Photography</h3>
      </div>
      <div className="illus-design motion raidus">
        <img src="/assets/img/motion.png" alt="" />
        <h3>Motion Graphics</h3>
      </div>
    </div>
  )
}

function User() {
  return (
    <div className="user">
      <img src="/assets/img/user.png" alt="" />
      <div className="user-text">
        <h2>I’m Amy, and I’d love<br /> to  work on your next project</h2>
        <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
        <a href="#" className="btn  btn-orange">Free Consultation</a>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="contact">
      <div className="contact-text">
        <h2>Book a call with me</h2>
        <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
      </div>
      <a href="#" className="btn btn-orange">Free Consultation</a>
    </div>
  )
}





function App() {
  return (
    <>
      <Header />
      <HeroText />
      <Design />
      <User />
      <Contact />
      <Header />
    </>
  )
}



export default App