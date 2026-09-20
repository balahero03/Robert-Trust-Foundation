import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <h1 className="logo">Robert Trust Foundation</h1>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#donate">Donate</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>Empowering Communities, Changing Lives</h2>
            <p>
              We are dedicated to creating lasting positive change through
              education, healthcare, and community development initiatives.
            </p>
            <a href="#donate" className="cta-button">
              Get Involved
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h3>About Us</h3>
            <p>
              The Robert Trust Foundation is a non-profit organization
              committed to serving communities in need. Our mission is to
              build a better future through sustainable programs and
              partnerships.
            </p>
          </div>
        </section>

        <section id="programs" className="section alt">
          <div className="container">
            <h3>Our Programs</h3>
            <div className="cards">
              <div className="card">
                <h4>Education</h4>
                <p>Providing access to quality education for underserved children.</p>
              </div>
              <div className="card">
                <h4>Healthcare</h4>
                <p>Supporting medical outreach and wellness initiatives.</p>
              </div>
              <div className="card">
                <h4>Community Development</h4>
                <p>Building infrastructure and resources for lasting impact.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="donate" className="section">
          <div className="container">
            <h3>Support Our Cause</h3>
            <p>Your contribution helps us continue our mission.</p>
            <a href="#" className="cta-button">
              Donate Now
            </a>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="container">
            <h3>Contact Us</h3>
            <p>Email: info@roberttrustfoundation.org</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Robert Trust Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
