import { Link } from 'react-router-dom'
import logo from '../assets/robert_trust_logo.jpeg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">
            <img src={logo} alt="The Roberts Charitable Trust" />
            <h3>The Roberts Charitable Trust</h3>
          </div>
          <p>Expanding the love boundaries through care, education, and opportunity for children.</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/initiatives">Initiatives</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/recognition">Recognition</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>123 Hope Street, Chennai, India</p>
          <p>hello@robertstrust.org</p>
          <p>+91 00000 00000</p>
        </div>
      </div>
      <p className="footer-bottom">© {new Date().getFullYear()} The Roberts Charitable Trust. All rights reserved.</p>
    </footer>
  )
}

export default Footer
