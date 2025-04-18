import profile from '../../assets/profilepic.png';
import galleryImg1 from '../../assets/Pottery1.png';
import galleryImg2 from '../../assets/Dilbert.png';
import galleryImg3 from '../../assets/Pottery2.png';
import galleryImg4 from '../../assets/Sourdough.png';

import './About.css';

const About = () => {
  return (
    <div className="container">
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
        <img src={galleryImg1} alt="Gallery1" className="galleryImg"/>
        <img src={galleryImg2} alt="Gallery2" className="galleryImg"/>
        <img src={galleryImg3} alt="Gallery3" className="galleryImg"/>
        <img src={galleryImg4} alt="Gallery4" className="galleryImg"/>
      </div>
    </div>
  )
}

export default About