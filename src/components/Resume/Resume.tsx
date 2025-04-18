import React from 'react'
import resume2025 from '../../assets/VP_Resume 2025.png';
import './Resume.css';

const Resume = () => {
  return (
    <div style={{paddingTop: 0, paddingBottom: 0}} className='container'>
      <img className='resume-img' src={resume2025} alt='resume' />
    </div>
  )
}

export default Resume