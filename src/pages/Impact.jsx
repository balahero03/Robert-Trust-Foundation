import { Link } from 'react-router-dom'

const stats = [
  { n: '500+', l: 'Lives Touched' },
  { n: '20+', l: 'Community Programs' },
  { n: '100+', l: 'Dedicated Volunteers' },
  { n: '15+', l: 'Awards & Recognitions' },
]

const highlights = [
  { icon: '📚', title: 'Education First', text: '300+ children supported with scholarships and learning materials.' },
  { icon: '🏥', title: 'Healthier Communities', text: '50+ health camps conducted across rural and urban areas.' },
  { icon: '🤝', title: 'Trusted Partnerships', text: 'Collaborations with 10+ organizations to extend our reach.' },
]

const goals = [
  { label: 'Children in school', value: 80 },
  { label: 'Health camps this year', value: 65 },
  { label: 'Meals served', value: 90 },
  { label: 'Families reached through outreach', value: 55 },
]

const stories = [
  { quote: 'The scholarship helped me finish school. Today I am the first in my family to go to college.', name: 'Student Name', role: 'Scholarship Recipient' },
  { quote: 'The health camp caught my son’s illness early. We are grateful for the care we received.', name: 'Parent Name', role: 'Health Camp Beneficiary' },
  { quote: 'Volunteering here showed me how small acts of kindness add up to real change.', name: 'Volunteer Name', role: 'Volunteer since 2021' },
]

function Impact() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 96 }}>
        <div className="container">
          <p className="section-label">The Difference We Make</p>
          <h1>Our Impact</h1>
          <p>Numbers that reflect the difference we've made together.</p>
          <span className="page-hero-accent" />
        </div>
      </section>

      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.l} className="stat">
              <strong>{s.n}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Highlights</p>
            <h2 className="section-title">Where Your Support Goes</h2>
          </div>
          <div className="card-grid">
            {highlights.map((h) => (
              <div key={h.title} className="card card-hover">
                <div className="card-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <p className="section-label">This Year’s Goals</p>
            <h2 className="section-title">Progress So Far</h2>
            <p className="section-text">
              We set clear goals every year and report openly on how far we have come. Here is where
              we stand today.
            </p>
          </div>
          <div className="progress-list">
            {goals.map((g) => (
              <div key={g.label}>
                <div className="progress-row">
                  <span>{g.label}</span>
                  <span>{g.value}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${g.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Stories of Change</p>
            <h2 className="section-title">In Their Words</h2>
          </div>
          <div className="card-grid">
            {stories.map((s) => (
              <div key={s.name} className="card quote-card">
                <blockquote>{s.quote}</blockquote>
                <p className="quote-name">{s.name}</p>
                <p className="quote-role">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Help us grow our impact</h2>
              <p>Every contribution brings a child closer to a safe, healthy, and educated future.</p>
            </div>
            <div className="cta-actions">
              <a href="#donate" className="btn btn-primary">Donate Now</a>
              <Link to="/recognition" className="btn btn-outline">See Recognition</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Impact
