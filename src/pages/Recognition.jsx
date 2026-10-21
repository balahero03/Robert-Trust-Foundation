import { Link } from 'react-router-dom'

const awards = [
  { icon: '🏆', year: '2025', title: 'Award Title', from: 'Awarding Organisation', text: 'Recognised for outstanding contribution to child education.' },
  { icon: '🥇', year: '2024', title: 'Award Title', from: 'Awarding Organisation', text: 'Honoured for community healthcare outreach programmes.' },
  { icon: '🎖️', year: '2023', title: 'Award Title', from: 'Awarding Organisation', text: 'Acknowledged for excellence in volunteer engagement.' },
  { icon: '🏅', year: '2022', title: 'Award Title', from: 'Awarding Organisation', text: 'Celebrated for relief work supporting families in need.' },
]

const certifications = [
  { icon: '📜', title: 'Registered Trust', text: 'Registered under the Indian Trusts Act. Registration details to be added.' },
  { icon: '🧾', title: '80G Certified', text: 'Donations are eligible for tax exemption under Section 80G.' },
  { icon: '✅', title: '12A Registered', text: 'Recognised as a charitable organisation under Section 12A.' },
]

const press = [
  { quote: 'A shining example of how community-led efforts can transform children’s lives.', name: 'Publication Name', role: 'News Feature, 2025' },
  { quote: 'The Trust’s health camps have reached families who had never seen a doctor before.', name: 'Publication Name', role: 'Article, 2024' },
]

const partners = ['Partner Logo', 'Partner Logo', 'Partner Logo', 'Partner Logo', 'Partner Logo', 'Partner Logo']

function Recognition() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Honours & Trust</p>
          <h1>Recognition</h1>
          <p>Awards, certifications, and words of support that reflect our commitment to children.</p>
          <span className="page-hero-accent" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Awards</p>
            <h2 className="section-title">Honours We’ve Received</h2>
          </div>
          <div className="card-grid">
            {awards.map((a) => (
              <div key={a.year} className="card award-card card-hover">
                <div className="award-medal">{a.icon}</div>
                <span className="award-year">{a.year}</span>
                <h3>{a.title}</h3>
                <p className="card-meta">{a.from}</p>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Accreditation</p>
            <h2 className="section-title">Certified & Transparent</h2>
            <p className="section-text">We follow strict governance and compliance so every donor can give with confidence.</p>
          </div>
          <div className="card-grid">
            {certifications.map((c) => (
              <div key={c.title} className="card card-white">
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">In the News</p>
            <h2 className="section-title">What Others Say</h2>
          </div>
          <div className="card-grid">
            {press.map((p, i) => (
              <div key={i} className="card quote-card">
                <blockquote>{p.quote}</blockquote>
                <p className="quote-name">{p.name}</p>
                <p className="quote-role">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Partners</p>
            <h2 className="section-title">Organisations That Stand With Us</h2>
          </div>
          <div className="logo-strip">
            {partners.map((p, i) => <div key={i} className="logo-tile">{p}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Partner with us</h2>
              <p>Join the organisations and individuals helping us expand the love boundaries.</p>
            </div>
            <div className="cta-actions">
              <Link to="/volunteer" className="btn btn-primary">Get Involved</Link>
              <Link to="/impact" className="btn btn-outline">View Our Impact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recognition
