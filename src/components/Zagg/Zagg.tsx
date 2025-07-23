import React from 'react'
import './Zagg.css';

import Nav from '../Nav/Nav';
import logoGreen from '../../assets/logos/vp-logo-green.webp';

import logo from '../../assets/zagg/zagg-logo.webp';
import brv from '../../assets/zagg/brv-mini.webp';
import lightBook from '../../assets/zagg/light-book.webp';
import stylus from '../../assets/zagg/pro-stylus.webp';
import keys from '../../assets/zagg/pro-keys.webp';


const Zagg = () => {
  return (
    <>
      <div className='zagg-background'>
        <Nav
          navColor={"bg-transparent-500"}
          navLinkColor={"#A6BC1B"}
          dropdownLinkColor={"#A6BC1B"}
          logoSrc={logoGreen}
        />
        <div  className='zagg-page-header'>
          <img alt='ZAGG logo' src={logo}/>
          <p>Protect what Matters</p>
        </div>
      </div>
      <div className='zagg-body'>
        <h1>Working at ZAGG, I was able to touch many product categories that expanded my field, 
          Tablet keyboards, mobiles cases, audio, and power.
        </h1>

        <p>ZAGG • BRAVEN • iFROGZ • ALTIGO • MOPHIE • GEAR4 • HALO</p>

        <div className='zagg-products'>
          <div className='zagg-product-item'>
            <div className='image-container'>
              <img alt='Light book' src={lightBook}/>
            </div>
            <p>ZAGG RUGGED MESSENGER</p>
          </div>
          <div className='zagg-product-item'>
            <div className='image-container'>
              <img className='stylus' alt='Pro Stylus' src={stylus}/>
            </div>
            <p>ZAGG PRO STYLUS</p>
          </div>
          <div className='zagg-product-item mobile-space-keys'>
            <div className='image-container'>
              <img alt='Pro Keys' src={keys}/>
            </div>
            <p>ZAGG PRO KEYS</p>
          </div>
          <div className='zagg-product-item mobile-space-brv'>
            <div style={{paddingBottom: "10px"}} className='image-container'>
              <img alt='BRV Mini' src={brv}/>
            </div>
            <p>BRAVEN BRV - MINI</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Zagg