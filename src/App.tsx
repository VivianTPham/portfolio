import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import logoGreen from './assets/vp-logo-green.webp';
import logoCream from './assets/vp-logo-cream.webp';

import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import About from './components/About/About';

function App() {
  const location = useLocation();
  const [navColor, setNavColor] = useState('');
  const [footerColor, setFooterColor] = useState('');
  const [bodyColor, setBodyColor] = useState('');
  const [logoSrc, setLogoSrc] = useState(logoGreen);
  const [logoFooterSrc, setFooterLogoSrc] = useState(logoGreen);

  useEffect(() => {
    let color = '#A6BC1B';
    // Determine the color based on the pathname
    switch (location.pathname) {
      case '/about':
        color = '#A6BC1B';
        setNavColor('bg-green-500');
        setFooterColor('bg-green-500');
        setBodyColor('bg-green-500');
        setLogoSrc(logoCream);
        setFooterLogoSrc(logoCream);
        break;
      case '/work':
        color = '#e7e4d6';
        setNavColor('bg-blue-500');
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setLogoSrc(logoCream);
        setFooterLogoSrc(logoGreen);
        break;
      default:
        color = '#e7e4d6';
        setNavColor('bg-beige-500');
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setLogoSrc(logoGreen);
        setFooterLogoSrc(logoGreen);
    }
    //document.body.style.backgroundColor = color;
  }, [location]);

  return (
    <div className={`${bodyColor}`}>
      <nav className={`nav ${navColor}`}>
        <Link to="/">
          <img src={logoSrc} alt='Logo' className='logo' />
        </Link>
        <div className='nav-links'>
          <Link to="/work">Work</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/about">Me</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className={`footer ${footerColor}`}>
        <Link to="/">
          <img src={logoFooterSrc} alt='Logo' className='logo' />
        </Link>
      </footer>
    </div>
  );
}

export default App;
