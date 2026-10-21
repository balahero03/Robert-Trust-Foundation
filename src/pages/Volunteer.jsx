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
