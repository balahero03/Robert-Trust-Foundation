const programs = [
  { icon: '📚', title: 'Education', text: 'Scholarships, school supplies, and learning support for children.' },
  { icon: '🏥', title: 'Healthcare', text: 'Access to basic healthcare and wellness checkups.' },
  { icon: '🏠', title: 'Shelter & Care', text: 'Safe housing and nurturing care for children in need.' },
  { icon: '🍲', title: 'Nutrition', text: 'Regular, healthy meals for growing children.' },
  { icon: '🎨', title: 'Skill Development', text: 'Vocational and creative skill-building programs.' },
  { icon: '🌱', title: 'Community Outreach', text: 'Programs that support entire communities, not just individuals.' },
]

function OurWork() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p>Explore the programs we run to support children and communities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {programs.map((p) => (
              <div key={p.title} className="card">
                <div className="card-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurWork
