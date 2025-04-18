import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import logo from './assets/vp-logo.webp';

import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import About from './components/About/About';

function App() {
  const location = useLocation();
  const [navColor, setNavColor] = useState('');

  useEffect(() => {
    let color = '#A6BC1B';
    // Determine the color based on the pathname
    switch (location.pathname) {
      case '/about':
        color = '#A6BC1B';
        setNavColor('bg-green-500');
        break;
      case '/work':
        color = '#e63a26';
        setNavColor('bg-red-500');
        break;
      default:
        color = '#e7e4d6';
        setNavColor('bg-beige-500');
    }
    document.body.style.backgroundColor = color;
  }, [location]);

  return (
    <div className={`${navColor}`}>
      <nav className={`nav ${navColor}`}>
        <Link to="/">
          <img src={logo} alt='Logo' className='logo' />
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
      <footer className={`footer ${navColor}`}>
        <Link to="/">
          <img src={logo} alt='Logo' className='logo' />
        </Link>
      </footer>
    </div>
  );
}

export default App;
