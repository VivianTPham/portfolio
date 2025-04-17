import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './assets/vp-logo.webp';

import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';
import About from './components/About/About';

function App() {
  return (
    <>
      <nav className='nav'>
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
      <footer className="footer">
        <Link to="/">
          <img src={logo} alt='Logo' className='logo' />
        </Link>
      </footer>
    </>
  );
}

export default App;
