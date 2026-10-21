const activities = [
  { title: 'Annual Health Camp', date: 'March 2026', text: 'Free health checkups and medicine distribution for children and families.' },
  { title: 'Back to School Drive', date: 'June 2026', text: 'Distributing school kits, uniforms, and books to children in need.' },
  { title: 'Winter Relief Program', date: 'December 2025', text: 'Blankets, warm clothing, and essentials for underprivileged families.' },
  { title: 'Volunteer Meetup', date: 'Ongoing', text: 'Monthly gatherings to plan and coordinate community activities.' },
]

function Activities() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Activities</h1>
          <p>A look at our recent and upcoming community activities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid">
          {activities.map((a) => (
            <div key={a.title} className="card">
              <div className="card-icon">📅</div>
              <h3>{a.title}</h3>
              <p style={{ color: 'var(--golden-brown)', fontWeight: 600, marginBottom: 8 }}>{a.date}</p>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Activities
