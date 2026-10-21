import { Link } from 'react-router-dom'

const initiatives = [
  { icon: '📚', title: 'Education', text: 'Scholarships, school supplies, and learning support for children.', tags: ['Scholarships', 'School Kits'] },
  { icon: '🏥', title: 'Healthcare', text: 'Access to basic healthcare, health camps, and wellness checkups.', tags: ['Health Camps', 'Medicines'] },
  { icon: '🏠', title: 'Shelter & Care', text: 'Safe housing and nurturing care for children in need.', tags: ['Safe Homes', 'Care'] },
  { icon: '🍲', title: 'Nutrition', text: 'Regular, healthy meals for growing children.', tags: ['Meal Programme'] },
  { icon: '🎨', title: 'Skill Development', text: 'Vocational and creative skill-building programmes for youth.', tags: ['Vocational', 'Arts'] },
  { icon: '🌱', title: 'Community Outreach', text: 'Relief drives and programmes that support entire communities.', tags: ['Relief Drives', 'Awareness'] },
]

const events = [
  { title: 'Annual Health Camp', date: 'March 2026', text: 'Free health checkups and medicine distribution for children and families.' },
  { title: 'Back to School Drive', date: 'June 2026', text: 'Distributing school kits, uniforms, and books to children in need.' },
  { title: 'Winter Relief Programme', date: 'December 2025', text: 'Blankets, warm clothing, and essentials for underprivileged families.' },
]

const process = [
  { title: 'Identify', text: 'We listen to communities to understand the most urgent needs.' },
  { title: 'Plan', text: 'We design focused programmes with partners and volunteers.' },
  { title: 'Deliver', text: 'Our teams deliver support directly to children and families.' },
  { title: 'Follow Up', text: 'We track progress and stay with each child for the long term.' },
]

function Initiatives() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">What We Do</p>
          <h1>Our Initiatives</h1>
          <p>Explore the programmes we run to support children and communities.</p>
          <span className="page-hero-accent" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Focus Areas</p>
            <h2 className="section-title">Programmes That Change Lives</h2>
          </div>
          <div className="card-grid">
            {initiatives.map((p) => (
              <div key={p.title} className="card card-hover">
                <div className="card-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="tag-row">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="feature-band split">
            <div>
              <p className="section-label">Featured Initiative</p>
              <h2 className="section-title">Every Child in School</h2>
              <p className="section-text">
                Our flagship education initiative ensures that no child drops out of school for lack of
                fees, books, or uniforms. We pair each student with a mentor and follow their progress
                year after year.
              </p>
              <ul className="check-list">
                <li>Annual scholarships for school and college students</li>
                <li>School kits, uniforms, and books every academic year</li>
                <li>After-school tutoring and mentoring</li>
              </ul>
            </div>
            <div className="split-visual-wrap">
              <div className="split-visual">🎓</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-label">How We Work</p>
            <h2 className="section-title">From Need to Impact</h2>
          </div>
          <div className="steps">
            {process.map((s, i) => (
              <div key={s.title} className="step">
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">On the Ground</p>
            <h2 className="section-title">Recent & Upcoming Activities</h2>
          </div>
          <div className="card-grid">
            {events.map((a) => (
              <div key={a.title} className="card card-white card-hover">
                <div className="card-icon">📅</div>
                <p className="card-meta">{a.date}</p>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Support an initiative</h2>
              <p>Your time or contribution can help us reach more children this year.</p>
            </div>
            <div className="cta-actions">
              <a href="#donate" className="btn btn-primary">Donate Now</a>
              <Link to="/volunteer" className="btn btn-outline">Volunteer</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Initiatives
