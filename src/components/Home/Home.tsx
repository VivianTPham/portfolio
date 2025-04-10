import React from 'react'
import "./Home.css";
import WavyMarquee from '../WavyMarquee/WavyMarquee';

const Home = () => {
  return (
    <>
      <WavyMarquee />
      <div className='home-container'>
          <div className='corner'></div>
          <div className='intro'>
              <h2 className='intro-content'>
                  I'm Vivian!<br />
                  An Industrial Designer Based in Utah!
              </h2>
          </div>
      </div>
    </>
  )
}

export default Home