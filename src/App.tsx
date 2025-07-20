import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import logoGreen from './assets/vp-logo-green.webp';
import logoCream from './assets/vp-logo-cream.webp';
import logoOrange from './assets/vp-logo-orange.webp';

import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import About from './components/About/About';

import Blackstone from './components/Blackstone/Blackstone';
import Zagg from './components/Zagg/Zagg';
import Contracting from './components/Contracting/Contracting';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [navColor, setNavColor] = useState('');
  const [footerColor, setFooterColor] = useState('');
  const [bodyColor, setBodyColor] = useState('');
  const [logoSrc, setLogoSrc] = useState(logoGreen);
  const [logoFooterSrc, setFooterLogoSrc] = useState(logoGreen);

  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case '/about':
        setNavColor('bg-green-500');
        setFooterColor('bg-green-500');
        setBodyColor('bg-green-500');
        setLogoSrc(logoCream);
        setFooterLogoSrc(logoCream);
        break;
      case '/blackstone':
        setNavColor('bg-orange-500');
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setLogoSrc(logoCream);
        setFooterLogoSrc(logoOrange);
        break;
      case '/zagg':
        setNavColor('bg-beige-500');
        setFooterColor('bg-green-500');
        setBodyColor('bg-green-500');
        setLogoSrc(logoGreen);
        setFooterLogoSrc(logoCream);
        break;
      case '/contracting':
        setNavColor('bg-blue-500');
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setLogoSrc(logoCream);
        setFooterLogoSrc(logoGreen);
        break;
      default:
        setNavColor('bg-beige-500');
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setLogoSrc(logoGreen);
        setFooterLogoSrc(logoGreen);
    }
  }, [location]);

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('works-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('works-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const toggleWorkDropdown = () => setWorkDropdownOpen((prev) => !prev);
  const closeDropdown = () => setWorkDropdownOpen(false);

  return (
    <div className={`${bodyColor}`}>
      <nav className={`nav ${navColor} px-4 py-2 flex items-center justify-between`}>
        <Link to="/">
          <img src={logoSrc} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links flex gap-4 relative">
          {/* Work with dropdown */}
          <div
            className="nav-links"
            onMouseEnter={() => setWorkDropdownOpen(true)}
            onMouseLeave={() => setWorkDropdownOpen(false)}
          >
            <button
              onClick={(e) => {
                toggleWorkDropdown();
                handleWorkClick(e);
              }}
              className="nav-button"
            >
              Work
            </button>
            <div className={`dropdown ${workDropdownOpen ? 'show' : ''}`}>
              <Link to="/blackstone" onClick={closeDropdown}>Blackstone</Link>
              <Link to="/zagg" onClick={closeDropdown}>ZAGG</Link>
              <Link to="/contracting" onClick={closeDropdown}>Contracting</Link>
            </div>
          </div>
          {/* Other links */}
          <Link to="/resume" className="px-4 py-2">
            Resume
          </Link>
          <Link to="/about" className="px-4 py-2">
            Me
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/blackstone" element={<Blackstone />} />
        <Route path="/zagg" element={<Zagg />} />
        <Route path="/contracting" element={<Contracting />} />
      </Routes>

      <footer className={`footer ${footerColor} px-4 py-4`}>
        <Link to="/">
          <img src={logoFooterSrc} alt="Logo" className="logo" />
        </Link>
      </footer>
    </div>
  );
}

export default App;
