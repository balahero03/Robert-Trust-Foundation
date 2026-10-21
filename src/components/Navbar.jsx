import { NavLink } from 'react-router-dom'
import logo from '../assets/robert_trust_logo.jpeg'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/activities', label: 'Activities' },
  { to: '/impact', label: 'Impact' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="The Roberts Charitable Trust" />
          <span className="navbar-logo-text">
            The Roberts<em> Charitable Trust</em>
          </span>
        </NavLink>
        <nav className="navbar-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <a href="#donate" className="btn btn-primary navbar-cta">Donate Now</a>
      </div>
    </header>
  )
}

export default Navbar
