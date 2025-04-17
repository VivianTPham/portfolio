import React from 'react'
import "./Home.css";
import WavyMarquee from '../WavyMarquee/WavyMarquee';

import blackstone from '../../assets/Blackstone.webp';
import zagg from '../../assets/Zagg.webp';
import wingo from '../../assets/Wingo.webp';
import logo from '../../assets/vp-logo.webp';

const Home = () => {
  return (
    <>
      <WavyMarquee />
      <div className="container">
        <div className='home-container'>
            <div className='corner'></div>
            <div className='intro'>
                <h2 className='intro-content'>
                    I'm Vivian!<br />
                    An Industrial Designer Based in Utah!
                </h2>
            </div>
        </div>
        <div className="works-section">
          <h3>Work</h3>
          <a href="#" className="marker"> Hello </a>
          <div className="works-container">
            <div className="work-item">
              <img className="work-img" src={blackstone} alt="Electric Pizza Oven" />
              <h2>BLACKSTONE</h2>
            </div>
            <div className="work-item">
              <img className="work-img" src={zagg} alt="Rugged Folio" />
              <h2>ZAGG</h2>
            </div>
            <div className="work-item">
              <img className="work-img" src={wingo} alt="30w Charger" />
              <h2>WINGO</h2>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home