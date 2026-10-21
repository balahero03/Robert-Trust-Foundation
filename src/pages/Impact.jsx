import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp.jsx'

const stats = [
  { value: 500, suffix: '+', l: 'Lives Touched' },
  { value: 20, suffix: '+', l: 'Community Programs' },
  { value: 100, suffix: '+', l: 'Dedicated Volunteers' },
  { value: 15, suffix: '+', l: 'Awards & Recognitions' },
]

const highlights = [
  { icon: '📚', title: 'Education Support', text: 'Scholarships, school supplies, and mentoring for students who need it most.', accent: 'var(--pastel-blue)' },
  { icon: '🧵', title: 'Livelihood Development', text: 'Shops, equipment, and skills training that help the needy earn on their own terms.', accent: 'var(--butter-yellow)' },
  { icon: '🏠', title: 'Safe Homes & Care', text: 'Safe housing, healthcare, and everyday support for families facing hardship.', accent: 'var(--golden-brown)' },
]

const stories = [
  { quote: 'The scholarship helped me finish school. Today I am the first in my family to go to college.', name: 'Student Name', role: 'Scholarship Recipient' },
  { quote: 'The health camp caught my son’s illness early. We are grateful for the care we received.', name: 'Parent Name', role: 'Health Camp Beneficiary' },
  { quote: 'Volunteering here showed me how small acts of kindness add up to real change.', name: 'Volunteer Name', role: 'Volunteer since 2021' },
  { quote: 'The tailoring machine gave me a way to earn on my own terms, right from home.', name: 'Beneficiary Name', role: 'Livelihood Support' },
  { quote: 'Our daughter finally has a safe home to grow up in, and that means everything to us.', name: 'Parent Name', role: 'Family Supported' },
  { quote: 'The mentors checked in on me every month. I never felt like just another number.', name: 'Student Name', role: 'Scholarship Recipient' },
  { quote: 'Starting my own shop felt impossible until the Trust believed in me.', name: 'Beneficiary Name', role: 'Livelihood Support' },
  { quote: 'The health camp doctors treated us with so much patience and respect.', name: 'Community Member', role: 'Health Camp Beneficiary' },
  { quote: 'I joined as a volunteer and found a second family here.', name: 'Volunteer Name', role: 'Volunteer since 2022' },
  { quote: 'Thanks to the outreach team, my medical expenses are no longer a daily worry.', name: 'Beneficiary Name', role: 'Healthcare Support' },
  { quote: 'Every school kit meant one less thing for my parents to worry about.', name: 'Student Name', role: 'Scholarship Recipient' },
  { quote: 'Seeing the children smile at our events is why I keep coming back.', name: 'Volunteer Name', role: 'Volunteer since 2020' },
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
              <strong><CountUp value={s.value} suffix={s.suffix} /></strong>
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
              <div key={h.title} className="card card-hover pillar-card" style={{ '--accent': h.accent }}>
                <div className="card-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Stories of Change</p>
            <h2 className="section-title">In Their Words</h2>
          </div>
          <div className="quote-grid">
            {stories.map((s, i) => (
              <div
                key={i}
                className="quote-card"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(25,54,91,0.15), rgba(25,54,91,0.88)), url(https://picsum.photos/seed/impact-${i}/500/500)`,
                }}
              >
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
              <a href="#donate" className="btn btn-primary">Donate</a>
              <Link to="/recognition" className="btn btn-outline">See Recognition</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Impact
