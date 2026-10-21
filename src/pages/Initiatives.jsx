import { Link } from 'react-router-dom'
import storyImage1 from '../assets/initiatives/education-story-1.png'
import storyImage2 from '../assets/initiatives/education-story-2.png'
import bajjiShop from '../assets/initiatives/bajji-shop.png'
import pettyShopTailoring from '../assets/initiatives/petty-shop-tailoring.png'
import safeHomeShop from '../assets/initiatives/safe-home-shop.png'

const process = [
  { title: 'Identify', text: 'We meet families on the ground and listen to what they truly need.' },
  { title: 'Support', text: 'We fund education, livelihoods, homes, and healthcare directly.' },
  { title: 'Follow Up', text: 'We stay in touch long after, to see each story through.' },
]

const stories = [
  {
    images: [storyImage1, storyImage2],
    title: "A Village Boy's Dream of Becoming a Lawyer",
    text: "Education sits at the heart of everything we do. In one of the villages we support, a young boy lives with his family in a modest thatched-roof home. Despite facing discrimination along the way, he holds firmly to his dream of becoming a lawyer. Through our scholarship programme, we are proud to stand beside him on that journey — because every child deserves the chance to turn their dream into reality.",
    tag: 'Education Sponsorship',
  },
  {
    images: [bajjiShop],
    title: 'A Fresh Start Through a Bajji Shop',
    text: 'We helped a physically challenged woman, who had been abandoned by her family, set up her own bajji stall. Through her hard work, she now earns around ₹700 a day — about ₹20,000 a month — and stands on her own feet.',
    tag: 'Livelihood Support',
  },
  {
    images: [pettyShopTailoring],
    title: 'A Petty Shop and a Tailoring Machine for Independence',
    text: "We set up a petty shop for a physically challenged man, which has become his family's only source of income — he now earns up to ₹30,000 a month. We also provided a tailoring machine to another physically challenged individual, helping him build a livelihood of his own.",
    tag: 'Livelihood Support',
  },
  {
    images: [safeHomeShop],
    title: 'A Safe Home and a New Beginning',
    text: 'We helped build a safe new house for a differently-abled child whose fragile bones mean she must be lifted with care, replacing the unsafe thatched-roof home her family once lived in. We also set up a multipurpose shop to help a cancer patient manage her medical expenses.',
    tag: 'Community Support',
  },
]

function Initiatives() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Initiatives We've Taken</p>
          <h1>Stories from the Ground</h1>
          <p>Explore the programmes we run to support children and communities.</p>
          <span className="page-hero-accent" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">How We Work</p>
            <h2 className="section-title">From Need to Impact</h2>
          </div>
          <div className="steps">
            {process.map((s, i) => (
              <div key={s.title} className="step">
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-label">On the Ground</p>
            <h2 className="section-title">Real Stories, Real Impact</h2>
          </div>

          <div className="story-grid">
            {stories.map((s) => (
              <div key={s.title} className="card card-white card-hover story-card">
                <div className="story-images">
                  {s.images.map((img, i) => (
                    <img key={i} src={img} alt="" />
                  ))}
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tag-row">
                  <span className="tag">{s.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Help us write the next story</h2>
              <p>Every contribution brings another family closer to a safe, dignified, and hopeful future.</p>
            </div>
            <div className="cta-actions">
              <a href="#donate" className="btn btn-primary">Donate</a>
              <Link to="/volunteer" className="btn btn-outline">Volunteer</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Initiatives
