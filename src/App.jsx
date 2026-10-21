import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import OurWork from './pages/OurWork.jsx'
import Activities from './pages/Activities.jsx'
import Impact from './pages/Impact.jsx'
import Volunteer from './pages/Volunteer.jsx'
import Contact from './pages/Contact.jsx'
import './pages/Home.css'
import './pages/About.css'
import './pages/Impact.css'
import './pages/Forms.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
