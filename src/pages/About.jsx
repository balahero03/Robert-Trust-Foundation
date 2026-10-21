import { Link } from 'react-router-dom'

const values = [
  { icon: '❤️', title: 'Compassion', text: 'We lead with love and treat every child and family with dignity.' },
  { icon: '🤝', title: 'Integrity', text: 'We are transparent with every rupee and accountable to our community.' },
  { icon: '🌱', title: 'Empowerment', text: 'We build skills and confidence so children can shape their own futures.' },
  { icon: '🌍', title: 'Inclusion', text: 'We serve every child, regardless of background, faith, or circumstance.' },
]

const milestones = [
  { year: '2010', title: 'The Trust is founded', text: 'Started with a small group of families supporting children in our neighbourhood.' },
  { year: '2014', title: 'First education programme', text: 'Launched scholarships and school-supply drives for underprivileged students.' },
  { year: '2018', title: 'Health camps begin', text: 'Partnered with local doctors to run free health checkups across communities.' },
  { year: '2023', title: 'Growing volunteer network', text: 'Crossed 100 active volunteers working across education, health, and outreach.' },
]

const team = [
  { initials: 'RR', name: 'Founder Name', role: 'Founder & Managing Trustee' },
  { initials: 'TN', name: 'Trustee Name', role: 'Trustee, Programmes' },
  { initials: 'TN', name: 'Trustee Name', role: 'Trustee, Finance' },
  { initials: 'CN', name: 'Coordinator Name', role: 'Volunteer Coordinator' },
]

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Who We Are</p>
          <h1>About Us</h1>
          <p>Learn about our mission, vision, and the story behind The Roberts Charitable Trust.</p>
          <span className="page-hero-accent" />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">How it all began</h2>
            <p className="section-text">
              The Roberts Charitable Trust was founded with a simple belief: a little kindness can create
              a brighter future. Over the years, we have grown into a community of volunteers, donors, and
              partners working together to support children through education, healthcare, and opportunity.
            </p>
            <ul className="check-list">
              <li>Registered charitable trust serving children and families</li>
              <li>Community-driven programmes run by dedicated volunteers</li>
              <li>Transparent use of every contribution we receive</li>
            </ul>
          </div>
          <div className="split-visual-wrap">
            <div className="split-visual">🤲</div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container about-grid">
          <div className="card card-white">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To expand the love boundaries by providing children and communities with care, education, and opportunity to thrive.</p>
          </div>
          <div className="card card-white">
            <div className="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>A world where every child has access to a safe, nurturing environment and the chance to reach their full potential.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">What Guides Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="card-grid">
            {values.map((v) => (
              <div key={v.title} className="card card-hover">
                <div className="card-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">Milestones Along the Way</h2>
          </div>
          <div className="timeline">
            {milestones.map((m) => (
              <div key={m.year} className="timeline-item">
                <p className="timeline-year">{m.year}</p>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">The People</p>
            <h2 className="section-title">Meet Our Trustees</h2>
          </div>
          <div className="card-grid">
            {team.map((t, i) => (
              <div key={i} className="card team-card">
                <div className="avatar">{t.initials}</div>
                <h3>{t.name}</h3>
                <p className="card-meta">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Be part of our story</h2>
              <p>Join hands with us as a volunteer or supporter and help a child dream bigger.</p>
            </div>
            <div className="cta-actions">
              <Link to="/volunteer" className="btn btn-primary">Volunteer With Us</Link>
              <Link to="/initiatives" className="btn btn-outline">Our Initiatives</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
