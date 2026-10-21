function Volunteer() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Volunteer With Us</h1>
          <p>Give your time and skills to help us create brighter futures.</p>
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap">
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
              Phone
              <input type="tel" placeholder="+91 00000 00000" />
            </label>
            <label>
              Area of Interest
              <select defaultValue="">
                <option value="" disabled>Select an area</option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>Community Outreach</option>
                <option>Events</option>
              </select>
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Tell us how you'd like to help" />
            </label>
            <button type="submit" className="btn btn-primary">Sign Up to Volunteer</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Volunteer
