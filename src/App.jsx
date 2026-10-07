import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['programs', 'Our work'],
  ['activities', 'Activities'],
  ['volunteer', 'Volunteer'],
]

const activities = [
  { date: 'RECENT ACTIVITY', title: 'A day of learning and play', type: 'Education', text: 'A space to share photos, a short story, and the difference this activity made for children and families.' },
  { date: 'COMMUNITY UPDATE', title: 'Growing together in our community', type: 'Community', text: 'A place to highlight local partnerships, community voices, and the people behind the work.' },
  { date: 'TRUST NEWS', title: 'New opportunities taking root', type: 'News', text: 'Use this area for announcements, milestones, and updates from The Roberts Charitable Trust.' },
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function PageHeading({ eyebrow, title, accent, text }) {
  return (
    <div className="page-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h1>{title}<br /><em>{accent}</em></h1>
      {text && <p className="page-lede">{text}</p>}
    </div>
  )
}

function WireframeCard({ index, title, text, link, onNavigate, variant = '' }) {
  return (
    <article className={`wire-card ${variant}`}>
      <div className="wire-image"><span>{index}</span></div>
      <div className="wire-card-copy">
        <small>SECTION / {index}</small>
        <h3>{title}</h3>
        <p>{text}</p>
        {link && <button className="text-link" onClick={() => onNavigate(link[0])}>{link[1]} <Arrow /></button>}
      </div>
    </article>
  )
}

function HomePage({ onNavigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span />The Roberts Charitable Trust</p>
          <h1>Expanding<br /><em>the love.</em></h1>
          <p className="hero-intro">We believe every child deserves the chance to learn, feel supported, and build a hopeful future. Together, we can make that possible.</p>
          <button className="button button-dark" onClick={() => onNavigate('about')}>Discover our mission <Arrow /></button>
          <div className="hero-note"><span className="note-line" />Expanding the love boundaries.</div>
        </div>
        <div className="hero-art" role="img" aria-label="Navy and golden illustration inspired by children and care">
          <div className="art-sun" /><div className="art-horizon" />
          <div className="art-stem stem-one"><b /><b /><b /></div><div className="art-stem stem-two"><b /><b /></div>
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-caption"><span>CARE · LEARNING · HOPE</span><span>A brighter future for every child</span></div>
          <span className="art-star star-one">✳</span><span className="art-star star-two">✳</span>
        </div>
      </section>
      <section className="ticker"><span>Care creates possibility</span><i>✳</i><span>Every child can flourish</span><i>✳</i><span>Hope grows together</span></section>
      <section className="intro section-wrap">
        <div className="section-label"><span>01</span> / OUR APPROACH</div>
        <div className="intro-body">
          <h2>A little care<br />can <em>change everything.</em></h2>
          <div className="intro-text"><p>At The Roberts Charitable Trust, we believe compassion can open doors. We support children and families with care that helps them feel seen, encouraged, and ready to thrive.</p><p>By bringing people together around education and wellbeing, we help turn kindness into lasting opportunity.</p><button className="text-link" onClick={() => onNavigate('about')}>What guides us <Arrow /></button></div>
        </div>
        <div className="value-row"><div><span>01</span><strong>Lead with love</strong><small>Every child deserves kindness.</small></div><div><span>02</span><strong>Open doors</strong><small>Learning builds new possibilities.</small></div><div><span>03</span><strong>Grow together</strong><small>Strong communities lift us all.</small></div></div>
      </section>
      <section className="work-section"><div className="section-wrap"><div className="work-heading"><div><div className="section-label"><span>02</span> / HOW WE HELP</div><h2>Love in <em>action.</em></h2></div><p>We help children find the support, learning, and encouragement they need to reach for what’s possible.</p></div>
        <div className="program-grid"><WireframeCard index="01" title="A brighter education" text="Helping children find encouragement, resources, and room to discover what they can become." link={['programs', 'Explore our work']} onNavigate={onNavigate} /><WireframeCard index="02" title="Care that reaches" text="Connecting children and families with the care and support that helps them feel safe and valued." link={['programs', 'Explore our work']} onNavigate={onNavigate} /><WireframeCard index="03" title="Love without limits" text="Bringing people together to open doors and create opportunities for every child." link={['programs', 'Explore our work']} onNavigate={onNavigate} /></div>
      </div></section>
      <section className="home-choices section-wrap"><p className="section-label"><span>03</span> / BE PART OF IT</p><h2>There’s a place for <em>you.</em></h2><div className="choice-grid"><button onClick={() => onNavigate('donate')}>Support our work <Arrow /></button><button onClick={() => onNavigate('volunteer')}>Become a volunteer <Arrow /></button><button onClick={() => onNavigate('activities')}>See recent activities <Arrow /></button></div></section>
    </>
  )
}

function AboutPage() {
  return <div className="page-content"><PageHeading eyebrow="Our story" title="Care can open" accent="every door." text="A first look at who we are, what we believe, and the community we hope to build alongside." />
    <section className="split-feature"><div className="feature-art"><span>OUR STORY</span></div><div><p className="section-label">WHO WE ARE</p><h2>Love without<br /><em>boundaries.</em></h2><p>This section can introduce the trust, its origins, the people involved, and the values that guide its work.</p></div></section>
    <section className="wire-values"><p className="section-label">WHAT GUIDES US</p><div className="program-grid"><WireframeCard index="01" title="Compassion" text="The belief at the heart of everything we do." /><WireframeCard index="02" title="Opportunity" text="Creating room for children to learn and thrive." /><WireframeCard index="03" title="Togetherness" text="Working with families and communities as partners." /></div></section>
  </div>
}

function ProgramsPage({ onNavigate }) {
  return <div className="page-content"><PageHeading eyebrow="Our work" title="Where care" accent="takes action." text="A flexible overview of the trust’s focus areas. Final programs and details can be decided later." />
    <section className="program-list"><WireframeCard index="01" title="Education and learning" text="Describe the learning opportunities, resources, or school partnerships supported by the trust." link={['activities', 'See related activities']} onNavigate={onNavigate} /><WireframeCard index="02" title="Child and family wellbeing" text="Describe the care, health, and wellbeing support available to children and families." link={['activities', 'See related activities']} onNavigate={onNavigate} /><WireframeCard index="03" title="Community opportunities" text="Describe the community-led projects and partnerships that help families thrive." link={['volunteer', 'Get involved']} onNavigate={onNavigate} /></section>
    <div className="page-cta"><h2>Help this work <em>grow.</em></h2><button className="button button-dark" onClick={() => onNavigate('donate')}>Support our work <Arrow /></button></div>
  </div>
}

function ActivitiesPage() {
  return <div className="page-content"><PageHeading eyebrow="News and stories" title="Life at the" accent="heart of our work." text="A place to share recent activities, moments from the community, and updates from the trust." />
    <div className="activity-filter"><span>ALL UPDATES</span><span>EDUCATION</span><span>COMMUNITY</span><span>TRUST NEWS</span></div>
    <section className="activity-grid">{activities.map((activity, index) => <article className="activity-card" key={activity.title}><div className="activity-image"><span>PHOTO / {String(index + 1).padStart(2, '0')}</span></div><div className="activity-meta"><span>{activity.date}</span><span>{activity.type}</span></div><h2>{activity.title}</h2><p>{activity.text}</p><span className="activity-read">READ STORY <Arrow /></span></article>)}</section>
    <div className="pagination"><span>← OLDER STORIES</span><span>01 / 03</span><span>NEWER STORIES →</span></div>
  </div>
}

function DonatePage() {
  return <div className="page-content"><PageHeading eyebrow="Donate" title="Help love" accent="reach further." text="A future donation page layout. Donation processing, payment providers, and final amounts are not connected in this wireframe." />
    <section className="donate-layout"><div className="donate-main"><p className="section-label">CHOOSE A GIFT AMOUNT</p><div className="amount-grid"><button>₹500<small>One-time</small></button><button>₹1,000<small>One-time</small></button><button>₹2,500<small>One-time</small></button><button>Other<small>Enter amount</small></button></div><div className="wire-form"><label>Donation frequency <span>One time　⌄</span></label><label>Your name <span>Enter your name</span></label><label>Email address <span>Enter your email</span></label><button className="button button-dark" disabled>Continue to payment <Arrow /></button><small>Payment and receipt details will be added after the donation flow is decided.</small></div></div><aside className="donate-aside"><div className="aside-heart">♡</div><h3>Your kindness<br />makes room for <em>hope.</em></h3><p>This panel can explain what gifts support, how donations are used, and how donors receive updates.</p></aside></section>
  </div>
}

function VolunteerPage() {
  return <div className="page-content"><PageHeading eyebrow="Volunteer" title="Bring your" accent="care to the table." text="A first look at how people can share time, skills, and support with The Roberts Charitable Trust." />
    <section className="volunteer-layout"><div className="volunteer-intro"><p className="section-label">WAYS TO GET INVOLVED</p><h2>Many ways to<br /><em>make a difference.</em></h2><p>Use this section to describe volunteer roles, expected time, who can apply, and what support volunteers receive.</p><div className="volunteer-roles"><div><span>01</span><strong>Learning support</strong><small>Help create encouraging learning spaces.</small></div><div><span>02</span><strong>Community activities</strong><small>Support events and local initiatives.</small></div><div><span>03</span><strong>Skills and expertise</strong><small>Offer professional or creative experience.</small></div></div></div>
      <div className="volunteer-form"><p className="section-label">VOLUNTEER INTEREST FORM</p><label>Full name<span>Your name</span></label><label>Email address<span>Your email</span></label><label>Area of interest<span>Select an area　⌄</span></label><label>Tell us a little about yourself<span className="textarea-placeholder">A few lines about your interests</span></label><button className="button button-dark" disabled>Send interest <Arrow /></button><small>Form submission will be connected once the process is defined.</small></div></section>
  </div>
}

function ContactPage() {
  return <div className="page-content"><PageHeading eyebrow="Contact" title="We’d love to" accent="hear from you." text="A simple contact page for questions, partnerships, volunteering, and general enquiries." />
    <section className="contact-layout"><div><p className="section-label">GET IN TOUCH</p><h2>Start a <em>conversation.</em></h2><p>Contact details and office information can be added here.</p><div className="contact-detail"><small>EMAIL</small><strong>Trust email address</strong></div><div className="contact-detail"><small>LOCATION</small><strong>City / region</strong></div><div className="contact-detail"><small>FOLLOW ALONG</small><strong>Social media links</strong></div></div><div className="contact-placeholder"><span>CONTACT FORM PLACEHOLDER</span><div>Name</div><div>Email</div><div>How can we help?</div><button className="button button-dark" disabled>Send message <Arrow /></button></div></section>
  </div>
}

const pageTitles = { home: 'Home', about: 'About', programs: 'Our work', activities: 'Activities', donate: 'Donate', volunteer: 'Volunteer', contact: 'Contact' }

function App() {
  const [page, setPage] = useState(() => new URLSearchParams(window.location.search).get('page') || 'home')

  useEffect(() => {
    const onPopState = () => setPage(new URLSearchParams(window.location.search).get('page') || 'home')
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function navigate(nextPage) {
    const safePage = pageTitles[nextPage] ? nextPage : 'home'
    window.history.pushState({}, '', safePage === 'home' ? window.location.pathname : `?page=${safePage}`)
    setPage(safePage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function pageView() {
    switch (page) {
      case 'about': return <AboutPage />
      case 'programs': return <ProgramsPage onNavigate={navigate} />
      case 'activities': return <ActivitiesPage />
      case 'donate': return <DonatePage />
      case 'volunteer': return <VolunteerPage />
      case 'contact': return <ContactPage />
      default: return <HomePage onNavigate={navigate} />
    }
  }

  return <div className="site-shell">
    <header className="topbar">
      <button className="brand" onClick={() => navigate('home')} aria-label="The Roberts Charitable Trust home"><img src="/roberts-charitable-trust-logo.png" alt="The Roberts Charitable Trust — Expanding the love boundaries" /></button>
      <nav className="nav" aria-label="Main navigation">{navItems.map(([key, label]) => <button className={page === key ? 'active' : ''} key={key} onClick={() => navigate(key)}>{label}</button>)}</nav>
      <button className="nav-cta" onClick={() => navigate('donate')}>Donate now <Arrow /></button>
    </header>
    <main>{pageView()}</main>
    <footer className="footer">
      <button className="brand footer-brand" onClick={() => navigate('home')} aria-label="The Roberts Charitable Trust home"><img src="/roberts-charitable-trust-logo.png" alt="The Roberts Charitable Trust — Expanding the love boundaries" /></button>
      <span className="footer-note">Expanding the love boundaries.</span>
      <div className="footer-links"><button onClick={() => navigate('contact')}>Contact</button><button onClick={() => navigate('volunteer')}>Volunteer</button><button onClick={() => navigate('activities')}>Activities</button></div>
      <small>© {new Date().getFullYear()} The Roberts Charitable Trust</small>
    </footer>
  </div>
}

export default App
