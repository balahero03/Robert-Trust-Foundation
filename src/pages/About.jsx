function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about our mission, vision, and the story behind The Roberts Charitable Trust.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To expand the love boundaries by providing children and communities with care, education, and opportunity to thrive.</p>
          </div>
          <div className="card">
            <div className="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>A world where every child has access to a safe, nurturing environment and the chance to reach their full potential.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--pale-blue-white)' }}>
        <div className="container">
          <p className="section-label">Our Story</p>
          <h2 className="section-title">How it all began</h2>
          <p className="section-text">
            The Roberts Charitable Trust was founded with a simple belief: a little kindness can create
            a brighter future. Over the years, we have grown into a community of volunteers, donors, and
            partners working together to support children through education, healthcare, and opportunity.
            Placeholder text for the full story goes here.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
