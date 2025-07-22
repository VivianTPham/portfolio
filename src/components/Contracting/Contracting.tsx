import React from 'react'
import './Contracting.css';

import Nav from '../Nav/Nav';
import logoCream from '../../assets/logos/vp-logo-cream.webp';

import clckrBanner from '../../assets/contracting/CLCKR-banner.webp';
import gimmeBanner from '../../assets/contracting/GIMME-banner.webp';
import venvtevBanner from '../../assets/contracting/venvtev-banner.webp';
import wingoBanner from '../../assets/contracting/Wingocase-banner.webp';

import clckrLogo from '../../assets/contracting/clckr-logo.webp';
import wingoLogo from '../../assets/contracting/wingo-logo.webp';

import lightpc from '../../assets/contracting/clckr-light-pc.webp';
import clckr1 from '../../assets/contracting/Clckr1.webp';
import clckr2 from '../../assets/contracting/Clckr2.webp';
import clckr3 from '../../assets/contracting/Clckr3.webp';
import clckr4 from '../../assets/contracting/Clckr4.webp';
import clckr5 from '../../assets/contracting/Clckr5.webp';

import lanyard from '../../assets/contracting/wingo-lanyard.webp';
import mjCase from '../../assets/contracting/wingo-mj-case.webp';
import perch from '../../assets/contracting/wingo-perch.webp';
import charger from '../../assets/Wingo-resize.webp';

import ResearchGallery from './ResearchGallery';
import WingoGallery from './WingoGallery';
const imageList: string[] = [clckr1, clckr2, clckr3, clckr4, clckr5];
const wingoImages: string[] = [perch, charger, mjCase];


const Contracting = () => {
  return (
    <>
      <Nav
        navColor={"bg-blue-500"}
        navLinkColor={"#e7e4d6"}
        dropdownLinkColor={"#6eb9bf"}
        logoSrc={logoCream}
      />
      <div className='contracting-page-header'>
        <h1>CONTRACTING</h1>
        <div className='contracting-brands'>
          <img className='brand' src={gimmeBanner} alt="gimme banner"/>
          <img className='brand' src={wingoBanner} alt="wingo banner"/>
          <img className='brand' src={clckrBanner} alt="clckr banner"/>
          <img className='brand' src={venvtevBanner} alt="venvtev banner"/>
        </div>
      </div>
      <div className='contracting-body'>
        <p>
          I had the amazing opportunity to collaborate with these brands. I applied my skill 
          set of research, product design, presentation making, and CMF development to help with 
          their product lines.
        </p>

        <div className='clckr'>
          <img src={clckrLogo} className='clckr-logo' alt='clckr Logo'/>
          <p>
            TREND RESEARCH + PATTERN DEVELOPMENT
          </p>
          <div className='clckr-products'>
            <img alt="clckr Light PC" className="clckr-light" src={lightpc}/>
            <ResearchGallery images={imageList} />
          </div>
        </div>

        <div className='wingo'>
          <img src={wingoLogo} alt='wingo logo' className='wingo-logo'/>
          <p>
            PRODUCT DESIGN, DECK DESIGN, CMF DEVELOPMENT
          </p>
          <div className='clckr-products'>
            <img className='wingo-lanyard' alt='Wingo Lanyard' src={lanyard}/>
            <WingoGallery images={wingoImages} layout={[1, 2]}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contracting