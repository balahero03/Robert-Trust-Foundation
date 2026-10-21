function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out with questions, ideas, or support.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <form className="form-card" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Message
              <textarea rows="5" placeholder="Your message" required />
            </label>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="card">
              <div className="card-icon">📍</div>
              <h3>Address</h3>
              <p>123 Hope Street, Chennai, Tamil Nadu, India</p>
            </div>
            <div className="card">
              <div className="card-icon">✉️</div>
              <h3>Email & Phone</h3>
              <p>hello@robertstrust.org</p>
              <p>+91 00000 00000</p>
            </div>
            <div className="map-placeholder">Map Placeholder</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
