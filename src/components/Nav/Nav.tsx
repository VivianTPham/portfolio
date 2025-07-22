import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Nav.css'; // Import your CSS styles for the Nav component

interface NavProps {
  navColor: string;           // background color class or token you're using now
  navLinkColor: string;       // text color for top-level links
  dropdownLinkColor: string;  // text color for dropdown links
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false); // accordion for Work in mobile

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const openWorkDropdown = () => setWorkDropdownOpen(true);
  const closeWorkDropdown = () => setWorkDropdownOpen(false);

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
    // close any open menus
    setMobileMenuOpen(false);
    setMobileWorkOpen(false);
  };

  return (
    <nav
      className={`nav ${navColor}`}
      style={
        {
          // allow theme overrides via CSS vars if desired
          '--nav-link-color': navLinkColor,
          '--dropdown-link-color': dropdownLinkColor,
        } as React.CSSProperties
      }
    >
      {/* Logo */}
      <div className="nav__brand">
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          <img src={logoSrc} alt="Logo" className="nav__logo" />
        </Link>
      </div>

      {/* Hamburger (mobile only, CSS hides on desktop) */}
      <button
        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-nav-panel"
        className={`nav__hamburger ${mobileMenuOpen ? 'is-active' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Desktop Menu */}
      <div className="nav__links-desktop">
        <div
          className="nav__work-wrapper"
          onMouseEnter={openWorkDropdown}
          onMouseLeave={closeWorkDropdown}
        >
          <button
            onClick={handleWorkClick}
            className="nav__link nav__link-button"
            style={{ color: navLinkColor }}
          >
            Work
          </button>
          <div
            className={`nav__dropdown ${workDropdownOpen ? 'show' : ''}`}
            role="menu"
          >
            <Link
              to="/blackstone"
              onClick={closeWorkDropdown}
              style={{ color: dropdownLinkColor }}
              className="nav__dropdown-link"
              role="menuitem"
            >
              Blackstone
            </Link>
            <Link
              to="/zagg"
              onClick={closeWorkDropdown}
              style={{ color: dropdownLinkColor }}
              className="nav__dropdown-link"
              role="menuitem"
            >
              ZAGG
            </Link>
            <Link
              to="/contracting"
              onClick={closeWorkDropdown}
              style={{ color: dropdownLinkColor }}
              className="nav__dropdown-link"
              role="menuitem"
            >
              Contracting
            </Link>
          </div>
        </div>
        <Link to="/resume" style={{ color: navLinkColor }} className="nav__link">
          Resume
        </Link>
        <Link to="/about" style={{ color: navLinkColor }} className="nav__link">
          Me
        </Link>
      </div>

      {/* Mobile Panel */}
      <div
        id="mobile-nav-panel"
        ref={mobileMenuRef}
        className={`nav__mobile-panel ${mobileMenuOpen ? 'open' : ''}`}
      >
        <button
          className="nav__mobile-close"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
        >
          &times;
        </button>

        <ul className="nav__mobile-list">
          <li>
            <button
              className="nav__mobile-link nav__mobile-accordion"
              onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
            >
              Work
            </button>
            <ul
              className={`nav__mobile-sublist ${
                mobileWorkOpen ? 'open' : ''
              }`}
            >
              <li>
                <Link
                  to="/blackstone"
                  className="nav__mobile-sublink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blackstone
                </Link>
              </li>
              <li>
                <Link
                  to="/zagg"
                  className="nav__mobile-sublink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ZAGG
                </Link>
              </li>
              <li>
                <Link
                  to="/contracting"
                  className="nav__mobile-sublink"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contracting
                </Link>
              </li>
              <li>
                {/* scroll-to-home Works section */}
                <button
                  className="nav__mobile-sublink nav__mobile-sublink-scroll"
                  onClick={handleWorkClick}
                >
                  See Works Section
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/resume"
              className="nav__mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav__mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Optional overlay dimmer for mobile */}
      {mobileMenuOpen && <div className="nav__overlay" onClick={() => setMobileMenuOpen(false)} />}
    </nav>
  );
};

export default Nav;
