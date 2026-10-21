const stats = [
  { n: '500+', l: 'Lives Touched' },
  { n: '20+', l: 'Community Programs' },
  { n: '100+', l: 'Dedicated Volunteers' },
  { n: '15+', l: 'Awards & Recognitions' },
]

const highlights = [
  { title: 'Education First', text: '300+ children supported with scholarships and learning materials.' },
  { title: 'Healthier Communities', text: '50+ health camps conducted across rural and urban areas.' },
  { title: 'Trusted Partnerships', text: 'Collaborations with 10+ organizations to extend our reach.' },
]

function Impact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Impact</h1>
          <p>Numbers that reflect the difference we've made together.</p>
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

      <section className="section" style={{ background: 'var(--pale-blue-white)' }}>
        <div className="container card-grid">
          {highlights.map((h) => (
            <div key={h.title} className="card">
              <div className="card-icon">✨</div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Impact
