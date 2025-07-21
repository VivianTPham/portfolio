import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import logoGreen from './assets/logos/vp-logo-green.webp';
import logoCream from './assets/logos/vp-logo-cream.webp';
import logoOrange from './assets/logos/vp-logo-orange.webp';

import nextArrowGreen from './assets/next-arrow.svg';

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
  const [navLinkColor, setNavLinkColor] = useState('#A6BC1B');
  const [dropdownLinkColor, setDropdownLinkColor] = useState('#A6BC1B');
  const [footerColor, setFooterColor] = useState('');
  const [bodyColor, setBodyColor] = useState('');
  const [logoSrc, setLogoSrc] = useState(logoGreen);
  const [logoFooterSrc, setFooterLogoSrc] = useState(logoGreen);
  const showFooterLink = ['/blackstone', '/zagg', '/contracting'].includes(location.pathname);
  const [workLinkText, setWorkLinkText] = useState('');
  const [workLinkTextColor, setWorkLinkTextColor] = useState('hsl(49.41, 26.15%, 87.25%)');
  const [workLink, setWorkLink] = useState('/');
  const [workLinkImg, setWorkLinkImg] = useState(nextArrowGreen);

  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    switch (location.pathname) {
      case '/about':
        setNavColor('bg-green-500');
        setNavLinkColor('#e7e4d6');
        setDropdownLinkColor('#A6BC1B');
        setFooterColor('bg-green-500');
        setBodyColor('bg-green-500');
        setLogoSrc(logoCream);
        setFooterLogoSrc(logoCream);
        break;
      case '/blackstone':
        setNavColor('bg-orange-500');
        setNavLinkColor('#e7e4d6');
        setDropdownLinkColor('#e09c34');
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setLogoSrc(logoCream);
        setFooterLogoSrc(logoOrange);
        setWorkLinkText('ZAGG');
        setWorkLinkTextColor('#e09c34');
        setWorkLink('#/zagg');
        break;
      case '/zagg':
        setNavColor('bg-beige-500');
        setNavLinkColor('#A6BC1B');
        setDropdownLinkColor('#A6BC1B');
        setFooterColor('bg-green-500');
        setBodyColor('bg-green-500');
        setLogoSrc(logoGreen);
        setFooterLogoSrc(logoCream);
        setWorkLinkText('CONTRACTING');
        setWorkLinkTextColor('#e7e4d6');
        setWorkLink('#/contracting');
        break;
      case '/contracting':
        setNavColor('bg-blue-500');
        setNavLinkColor('#e7e4d6');
        setDropdownLinkColor('#6eb9bf');
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setLogoSrc(logoCream);
        setFooterLogoSrc(logoGreen);
        setWorkLinkText('BLACKSTONE');
        setWorkLinkTextColor('#A6BC1B');
        setWorkLink('#/blackstone');
        break;
      default:
        setNavColor('bg-beige-500');
        setNavLinkColor('#A6BC1B');
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
              style={{color: `${navLinkColor}`}}
              className="nav-button"
            >
              Work
            </button>
            <div className={`dropdown ${workDropdownOpen ? 'show' : ''}`}>
              <Link to="/blackstone" onClick={closeDropdown} style={{color: `${dropdownLinkColor}`}}>Blackstone</Link>
              <Link to="/zagg" onClick={closeDropdown} style={{color: `${dropdownLinkColor}`}}>ZAGG</Link>
              <Link to="/contracting" onClick={closeDropdown} style={{color: `${dropdownLinkColor}`}}>Contracting</Link>
            </div>
          </div>
          {/* Other links */}
          <Link to="/resume" style={{color: `${navLinkColor}`}} className="px-4 py-2">
            Resume
          </Link>
          <Link to="/about" style={{color: `${navLinkColor}`}} className="px-4 py-2">
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
        {showFooterLink && <a style={{color: `${workLinkTextColor}`}} className='footer-worklink' href={workLink}>{workLinkText} <img src={workLinkImg}/></a>}
      </footer>
    </div>
  );
}

export default App;
