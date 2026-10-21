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
      <section className="page-hero about-hero">
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
            <p className="section-label">Meet Our Founder</p>
            <h2 className="section-title">Every change begins with one brave heart.</h2>
            <p className="section-text">
              Hi, I'm <strong>Shalini Robert</strong>, a passionate social worker with a motive
              of <strong>BEING THE CHANGE</strong>. With four years of experience in the field, I've had
              the privilege of working with diverse populations, from children to adults, and addressing a
              wide range of social issues. At the age of 19, I lost my father and decided to BE THE CHANGE
              and prove that life does not end when we face a loss.
            </p>
            <p className="section-text" style={{ marginTop: 14 }}>
              My passion for social work stems from my desire to create positive change in individuals,
              families, and communities. I believe that every person deserves to live a life of dignity,
              respect, and purpose, and at the age of 23, I'm committed to helping them achieve that.
            </p>
            <p className="founder-sign">— Shalini Robert, Founder</p>
          </div>
          <div className="founder-photos">
            <figure className="photo-polaroid">
              <img src="/media/image1.png" alt="Shalini Robert" />
            </figure>
            <figure className="photo-arch">
              <img src="/media/image2.png" alt="Shalini Robert at work" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-alt mission-section">
        <svg className="mission-doodle" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path
            id="rocket-path"
            d="M -60 380 C 200 380, 260 120, 470 170 S 760 380, 900 200 S 1100 40, 1280 60"
            fill="none"
          />
          <g className="rocket">
            <g transform="scale(2) translate(-22 -14)">
              <path d="M4 14 C 10 4, 30 2, 44 14 C 30 26, 10 24, 4 14 Z" fill="var(--white)" stroke="var(--dark-navy)" strokeWidth="2" />
              <circle cx="28" cy="14" r="4.5" fill="var(--pastel-blue)" stroke="var(--dark-navy)" strokeWidth="2" />
              <path d="M10 6 L2 0 L6 9 Z M10 22 L2 28 L6 19 Z" fill="var(--golden-brown)" />
              <path className="rocket-flame" d="M4 10 L-10 14 L4 18 Z" fill="var(--butter-yellow)" />
            </g>
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
              <mpath href="#rocket-path" />
            </animateMotion>
          </g>
        </svg>

        <div className="container mission-content">
          <p className="section-label">Our Mission</p>
          <h2 className="section-title">Spreading Love, Being the Change</h2>
          <p className="section-text">
            Our mission extends beyond merely uplifting lives through financial support; we strive to
            create a lasting impact in the world by offering unconditional love and compassion. The
            examples we've shared are just a glimpse of our commitment to society. Countless initiatives,
            campaigns, and inspiring stories highlight our efforts. We remain dedicated to spreading love
            and embodying the change we wish to see in the world, believing that every act of kindness
            can contribute to a brighter future.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">What Guides Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-line">
            <svg className="values-twine" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 8 Q 250 52, 500 30 T 1000 8" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
            {values.map((v, i) => (
              <div key={v.title} className="value-hang" style={{ '--i': i }}>
                <div className="value-tag">
                  <span className="value-stamp">{v.icon}</span>
                  <span className="value-num">0{i + 1}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
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
