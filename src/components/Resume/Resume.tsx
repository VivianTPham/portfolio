import React from 'react';
import resume2025 from '../../assets/VP_Resume_2025.png';
import './Resume.css';

import Nav from '../Nav/Nav';
import logoGreen from '../../assets/logos/vp-logo-green.webp';

const Resume = () => {
  return (
    <>
      <Nav
        navColor={"bg-beige-500"}
        navLinkColor={"#A6BC1B"}
        dropdownLinkColor={"#A6BC1B"}
        logoSrc={logoGreen}
      />
      <div style={{ paddingTop: 0, paddingBottom: 0 }} className="container">
        <a href="assets/Vivian_Pham_Resume-2025.pdf" download className="resume-download-link">
          <img className="resume-img" src={resume2025} alt="resume" />
          <div className="resume-overlay"><p>Click to Download</p></div>
        </a>
      </div>
    </>
  );
};

export default Resume;
