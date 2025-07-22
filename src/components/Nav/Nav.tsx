import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavProps {
  navColor: string;
  navLinkColor: string;
  dropdownLinkColor: string;
  logoSrc: string;
}

const Nav: React.FC<NavProps> = ({
  navColor,
  navLinkColor,
  dropdownLinkColor,
  logoSrc
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);

  const toggleWorkDropdown = () => setWorkDropdownOpen(true);
  const closeDropdown = () => setWorkDropdownOpen(false);

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

  return (
    <nav className={`nav ${navColor} px-4 py-2 flex items-center justify-between`}>
      <Link to="/">
        <img src={logoSrc} alt="Logo" className="logo" />
      </Link>
      <div className="nav-links flex gap-4 relative">
        {/* Work with dropdown */}
        <div
          className="nav-links"
          onMouseEnter={toggleWorkDropdown}
          onMouseLeave={closeDropdown}
        >
          <button
            onClick={handleWorkClick}
            style={{ color: navLinkColor }}
            className="nav-button"
          >
            Work
          </button>
          <div className={`dropdown ${workDropdownOpen ? 'show' : ''}`}>
            <Link to="/blackstone" onClick={closeDropdown} style={{ color: dropdownLinkColor }}>Blackstone</Link>
            <Link to="/zagg" onClick={closeDropdown} style={{ color: dropdownLinkColor }}>ZAGG</Link>
            <Link to="/contracting" onClick={closeDropdown} style={{ color: dropdownLinkColor }}>Contracting</Link>
          </div>
        </div>
        <Link to="/resume" style={{ color: navLinkColor }} className="px-4 py-2">
          Resume
        </Link>
        <Link to="/about" style={{ color: navLinkColor }} className="px-4 py-2">
          Me
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
