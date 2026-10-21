import { Link } from 'react-router-dom'

// Set `img` to a path in /public (e.g. '/media/award-1.jpg') to replace a placeholder
const awards = [
  {
    title: 'Community Champion Award',
    event: 'Maathare T24 Women of Excellence',
    text: 'I was honored to receive the Community Champion Award at the Maathare T24 Women of Excellence event.',
    img: null,
  },
  {
    title: 'Creators for Change Award',
    event: 'Youth Speak Forum by AIESEC',
    text: 'I was also honored to receive the Creators for Change Award at the Youth Speak Forum organized by AIESEC.',
    img: null,
  },
]

const honours = [
  { type: 'Featured', source: 'The New Indian Express', text: 'I was honored to be featured in the New Indian Express, Sunday edition.', img: null },
  { type: 'Featured', source: 'The Better India', text: 'I was also honoured to be featured in an article in BETTER INDIA.', img: null },
  { type: 'Speaker', source: 'UDAAN by Zing, LPU Punjab', text: 'I was also honoured to be the first TAMIL speaker at the UDAAN by Zing edition held at the Lovely Professional University, Punjab.', img: null },
  { type: 'Featured', source: 'Eat My News', text: 'I was honoured to be featured in a Global article named “EAT MY NEWS”.', img: null },
  { type: 'Nominated', source: 'Vikatan Digital Awards 2025', text: 'I was honoured to be nominated as the BEST IMPACT CREATOR at the Vikatan Digital Awards, 2025.', img: null },
]

function Photo({ src, alt, className }) {
  return src
    ? <img src={src} alt={alt} className={className} />
    : <div className={`img-placeholder ${className}`} role="img" aria-label={`${alt} (image coming soon)`}>📷<span>Image placeholder</span></div>
}

function Recognition() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Honours & Trust</p>
          <h1>Recognition</h1>
          <p>Awards and moments of recognition that reflect our commitment to being the change.</p>
          <span className="page-hero-accent" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">01 · Awards</p>
            <h2 className="section-title">Awards Received</h2>
          </div>
          <div className="award-rows">
            {awards.map((a, i) => (
              <article key={a.title} className={`award-row ${i % 2 ? 'award-row-flip' : ''}`}>
                <div className="award-photo">
                  <Photo src={a.img} alt={a.title} className="award-img" />
                  <span className="award-ribbon">🏆</span>
                </div>
                <div className="award-body">
                  <p className="card-meta">{a.event}</p>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-label">02 · Honours & Recognition</p>
            <h2 className="section-title">Featured, Spoken & Nominated</h2>
          </div>
          <div className="honour-grid">
            {honours.map((h) => (
              <article key={h.text} className="honour-card">
                <Photo src={h.img} alt={h.source} className="honour-img" />
                <div className="honour-body">
                  <span className={`honour-chip chip-${h.type.toLowerCase()}`}>{h.type}</span>
                  <h3>{h.source}</h3>
                  <p>{h.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Be part of the change</h2>
              <p>Join us in spreading love and creating a brighter future for every child.</p>
            </div>
            <div className="cta-actions">
              <Link to="/volunteer" className="btn btn-primary">Get Involved</Link>
              <Link to="/impact" className="btn btn-outline">View Our Impact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recognition
