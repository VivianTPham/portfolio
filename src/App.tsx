import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import logoGreen from './assets/logos/vp-logo-green.webp';
import logoCream from './assets/logos/vp-logo-cream.webp';
import logoOrange from './assets/logos/vp-logo-orange.webp';
import logoBlue from './assets/logos/vp-logo-blue.webp';

import greenArrow from './assets/next-arrow.svg';
import orangeArrow from './assets/arrows/orange-arrow.svg';
import blueArrow from './assets/arrows/blue-arrow.svg';
import creamArrow from './assets/arrows/cream-arrow.svg';

import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import About from './components/About/About';

import Blackstone from './components/Blackstone/Blackstone';
import Zagg from './components/Zagg/Zagg';
import Contracting from './components/Contracting/Contracting';

function App() {
  const location = useLocation();

  const [footerColor, setFooterColor] = useState('');
  const [bodyColor, setBodyColor] = useState('');
  const [logoFooterSrc, setFooterLogoSrc] = useState(logoGreen);
  const showFooterLink = ['/blackstone', '/zagg', '/contracting'].includes(location.pathname);
  const [workLinkText, setWorkLinkText] = useState('');
  const [workLinkTextColor, setWorkLinkTextColor] = useState('hsl(49.41, 26.15%, 87.25%)');
  const [workLink, setWorkLink] = useState('/');
  const [workLinkImg, setWorkLinkImg] = useState(greenArrow);


  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    switch (location.pathname) {
      case '/about':
        setFooterColor('bg-green-500');
        setBodyColor('bg-green-500');
        setFooterLogoSrc(logoCream);
        break;
      case '/blackstone':
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setFooterLogoSrc(logoOrange);
        setWorkLinkText('ZAGG');
        setWorkLinkTextColor('#e09c34');
        setWorkLink('#/zagg');
        setWorkLinkImg(orangeArrow);
        break;
      case '/zagg':
        setFooterColor('bg-green-500');
        setBodyColor('bg-green-500');
        setFooterLogoSrc(logoCream);
        setWorkLinkText('CONTRACTING');
        setWorkLinkTextColor('#e7e4d6');
        setWorkLink('#/contracting');
        setWorkLinkImg(creamArrow);
        break;
      case '/contracting':
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setFooterLogoSrc(logoBlue);
        setWorkLinkText('BLACKSTONE');
        setWorkLinkTextColor('#6eb9bf');
        setWorkLink('#/blackstone');
        setWorkLinkImg(blueArrow);
        break;
      default:
        setFooterColor('bg-beige-500');
        setBodyColor('bg-beige-500');
        setFooterLogoSrc(logoGreen);
    }
  }, [location]);

  return (
    <div className={`${bodyColor}`}>
      <Routes>
        <Route path="/" element={<Home />} />
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
