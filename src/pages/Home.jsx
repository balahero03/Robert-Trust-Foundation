import { Link } from 'react-router-dom'
import donateIcon from '../assets/icons/donate.png'
import volunteerIcon from '../assets/icons/volunteer.png'
import partnerIcon from '../assets/icons/partner.png'
import spreadIcon from '../assets/icons/spread-the-word.png'

const highlights = [
  { icon: donateIcon, title: 'Donate' },
  { icon: volunteerIcon, title: 'Volunteer' },
  { icon: partnerIcon, title: 'Partner' },
  { icon: spreadIcon, title: 'Spread the Word' },
]

function Home() {
  return (
    <>
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/media/hero-poster.jpg">
          <source src="/media/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-content">
          <p className="section-label hero-label">The Roberts Charitable Trust</p>
          <h1 className="hero-title">
            <span className="hero-title-part part-1">A little kindness.</span>{' '}
            <span className="hero-title-part part-2">A brighter future.</span>
          </h1>
          <p className="hero-text">
            Together, we can create meaningful change in the lives of children and communities.
          </p>
          <div className="hero-actions">
            <a href="#donate" className="btn btn-primary">Donate</a>
            <Link to="/about" className="btn btn-outline-light">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label">Our Mission</p>
          <h2 className="section-title">Expanding the love boundaries</h2>
          <p className="section-text">
            The Roberts Charitable Trust is committed to supporting children and communities
            through education, care, and meaningful opportunities. We believe every child deserves
            a safe, supportive, and nurturing environment to grow and thrive.
          </p>
          <Link to="/about" className="btn btn-primary" style={{ marginTop: 24 }}>Know More About Us</Link>
        </div>
      </section>

      <section className="section get-involved">
        <div className="container">
          <p className="section-label">Get Involved</p>
          <h2 className="section-title">You can help us</h2>
          <div className="badge-grid">
            {highlights.map((h) => (
              <div key={h.title} className="badge">
                <div className="badge-circle">
                  <span className="badge-mark" style={{ WebkitMaskImage: `url(${h.icon})`, maskImage: `url(${h.icon})` }} />
                </div>
                <h3 className="badge-label">{h.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
