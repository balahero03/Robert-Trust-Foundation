const reasons = [
  { icon: '💛', title: 'Make a Difference', text: 'See the direct impact of your time on children and families.' },
  { icon: '🧑‍🤝‍🧑', title: 'Join a Community', text: 'Work alongside kind, passionate people who share your values.' },
  { icon: '🌟', title: 'Grow Your Skills', text: 'Gain experience in teaching, event planning, and outreach.' },
]

const roles = [
  { icon: '📖', title: 'Tutor & Mentor', text: 'Help children with homework, reading, and exam preparation.', tags: ['Weekends', '2–4 hrs/week'] },
  { icon: '🩺', title: 'Health Camp Support', text: 'Assist doctors and coordinate families at our health camps.', tags: ['Event-based'] },
  { icon: '🎉', title: 'Events & Drives', text: 'Plan and run donation drives, celebrations, and awareness events.', tags: ['Flexible'] },
  { icon: '💻', title: 'Skills-Based', text: 'Support us with design, photography, social media, or accounts.', tags: ['Remote friendly'] },
]

const steps = [
  { title: 'Sign Up', text: 'Fill in the form with your details and interests.' },
  { title: 'Connect', text: 'Our coordinator will reach out for a short conversation.' },
  { title: 'Orientation', text: 'Attend a brief orientation to learn how we work.' },
  { title: 'Get Started', text: 'Join your first activity and start making a difference.' },
]

const faqs = [
  { q: 'Do I need any prior experience?', a: 'No. We welcome everyone with a willing heart. We will guide you through orientation and on-the-job support.' },
  { q: 'How much time do I need to commit?', a: 'As little as a few hours a month. You can choose roles that match your schedule.' },
  { q: 'Can students volunteer?', a: 'Yes. Students aged 16 and above can volunteer; those under 18 need consent from a parent or guardian.' },
  { q: 'Will I receive a certificate?', a: 'Yes. Volunteers receive a certificate of appreciation for their contribution.' },
]

function Volunteer() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Get Involved</p>
          <h1>Volunteer With Us</h1>
          <p>Give your time and skills to help us create brighter futures.</p>
          <span className="page-hero-accent" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Why Volunteer</p>
            <h2 className="section-title">Small Acts, Big Change</h2>
          </div>
          <div className="card-grid">
            {reasons.map((r) => (
              <div key={r.title} className="card card-hover">
                <div className="card-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-label">Opportunities</p>
            <h2 className="section-title">Ways You Can Help</h2>
          </div>
          <div className="card-grid">
            {roles.map((r) => (
              <div key={r.title} className="card card-white card-hover">
                <div className="card-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <div className="tag-row">
                  {r.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">The Process</p>
            <h2 className="section-title">How to Get Started</h2>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div key={s.title} className="step">
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="volunteer-form">
        <div className="container volunteer-grid">
          <div>
            <p className="section-label">Sign Up</p>
            <h2 className="section-title">Join Our Volunteer Family</h2>
            <p className="section-text">
              Tell us a little about yourself and how you would like to help. Our volunteer coordinator
              will get in touch within a few days.
            </p>
            <ul className="check-list">
              <li>Flexible roles that fit your schedule</li>
              <li>Orientation and ongoing support</li>
              <li>Certificate of appreciation</li>
            </ul>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input type="text" placeholder="Your name" required />
            </label>
            <div className="form-row">
              <label>
                Email
                <input type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="+91 00000 00000" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Area of Interest
                <select defaultValue="">
                  <option value="" disabled>Select an area</option>
                  <option>Tutoring & Mentoring</option>
                  <option>Health Camps</option>
                  <option>Events & Drives</option>
                  <option>Skills-Based</option>
                </select>
              </label>
              <label>
                Availability
                <select defaultValue="">
                  <option value="" disabled>Select availability</option>
                  <option>Weekdays</option>
                  <option>Weekends</option>
                  <option>Event-based</option>
                  <option>Remote</option>
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea rows="4" placeholder="Tell us how you'd like to help" />
            </label>
            <button type="submit" className="btn btn-primary">Sign Up to Volunteer</button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Volunteer
