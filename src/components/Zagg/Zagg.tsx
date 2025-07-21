import React from 'react'
import './Zagg.css';

import logo from '../../assets/zagg/zagg-logo.webp';
import brv from '../../assets/zagg/BRV-Mini.webp';
import lightBook from '../../assets/ZAGG-Resized.webp';
import stylus from '../../assets/zagg/pro-stylus.webp';
import keys from '../../assets/zagg/pro-keys.webp';


const Zagg = () => {
  return (
    <>
    <div  className='zagg-page-header'>
        <img alt='ZAGG logo' src={logo}/>
        <p>Protect what Matters</p>
      </div>
      <div className='zagg-body'>
        <h1>Working at ZAGG, I was able to touch many product categories that expanded my field, 
          Tablet keyboards, mobiles cases, audio, and power.
        </h1>

        <p>ZAGG • BRAVEN • iFROGZ • ALTIGO • MOPHIE • GEAR4 • HALO</p>

        <div className='zagg-products'>
          <img className='lightBook' alt='Light book' src={lightBook}/>
          <img className='stylus' alt='Pro Stylus' src={stylus}/>
          <img className='keys' alt='Pro Keys' src={keys}/>
          <img className='brv' alt='BRV Mini' src={brv}/>
        </div>
      </div>
    </>
  )
}

export default Zagg