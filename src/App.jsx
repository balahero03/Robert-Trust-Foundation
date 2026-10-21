import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Initiatives from './pages/Initiatives.jsx'
import Impact from './pages/Impact.jsx'
import Recognition from './pages/Recognition.jsx'
import Volunteer from './pages/Volunteer.jsx'
import './pages/Home.css'
import './pages/Pages.css'
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
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
