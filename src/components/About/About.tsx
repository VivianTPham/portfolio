import React from 'react'
import profile from '../../assets/placeholder.jpg';
import galleryImg from '../../assets/placeholder2.jpg';

import './About.css';

const About = () => {
  return (
    <div className="container-about">
      <div className="about-top">
        <img src={profile} alt="profile img" className="profile"/>
        <div>
          <h2>Hello!</h2>
          <br />
          <p>I’m Vivian! I’m an Industrial Designer currently based in Utah.</p>
          <br />
          <p>In the past 5 years, I’ve had amazing opportunities to work on various product categories and 
            collaborating others as a professional industrial designer!</p>
          <br />
          <p>For my leisure, I enjoy baking sourdough, ceramics, sewing and hanging out with my dog!</p>
          <br />
          <p>For any questions, or interests in working together, contact me at:</p> 
          <br />
          <p>vivianpham.id@gmail.com</p>
        </div>
      </div>
      <div className="about-gallery">
        <img src={galleryImg} alt="Gallery image 1" className="galleryImg"/>
        <img src={galleryImg} alt="Gallery image 1" className="galleryImg"/>
        <img src={galleryImg} alt="Gallery image 1" className="galleryImg"/>
        <img src={galleryImg} alt="Gallery image 1" className="galleryImg"/>
      </div>
    </div>
  )
}

export default About