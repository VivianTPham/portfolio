import React from 'react'
import './Blackstone.css';

import logo from '../../assets/blackstone/blackstone-logo.webp';
import griddle from '../../assets/blackstone/griddle-caddy.webp';
import cabinet from '../../assets/blackstone/cabinet.webp';
import oven from '../../assets/Blackstone.webp';

import underline1 from '../../assets/blackstone/underline-1.svg';
import underline2 from '../../assets/blackstone/underline-2.svg';
import underline3 from '../../assets/blackstone/underline-3.svg';

const Blackstone = () => {
  return (
    <>
      <div  className='blackstone-page-header'>
        <img alt='blackstone logo' src={logo}/>
        <p>Cook Anything. Anytime. Anywhere</p>
      </div>
      <div className='blackstone-body'>
        <div className='blackstone-product-item'>
          <img alt='blackstone griddle' src={griddle}/>
          <div className='description'>
            <h1>Griddle Essentials: Plastic Tool Caddy</h1>
            <img src={underline1} style={{width: '100%'}} alt='product underline 1'/>
            <p>
              This caddy was designed to incorporate a paper towel holder while also being easily manufacturable and 
              reducing shelf space when places in stores. It ran through many concepts but was finally nailed down to a good
              design that can do it all.
            </p>
          </div>
        </div>
        <div className='blackstone-product-item'>
          <div className='description oven'>
            <h1>E-Series: Electric Pizza Oven</h1>
            <img src={underline2} alt='product underline 2'/>
            <p>
              The creation of this product was to bring the pizza mkaing experience inside the home. 
              It features a clean out dor on.
            </p>
          </div>
          <img alt='blackstone pizza oven' src={oven}/>
        </div>
        <div className='blackstone-product-item'>
          <img alt='blackstone pizza oven' src={cabinet}/>
          <div className='description'>
            <h1>ProSeries Line</h1>
            <img src={underline3} alt='product underline 3'/>
            <p>
              I was given this project along with 2 other designers to create a well thought out design perfect for any home.
              I contrbuted to the side shelfs, handles, and knob design. Ideating around a more comfortable fit while pushing 
              for a more modern take.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blackstone