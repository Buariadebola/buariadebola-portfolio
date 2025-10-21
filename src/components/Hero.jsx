import video from '/particle bg.mp4'
import React from 'react'
import ComputerCanvas from './Computer'
import arrow from '../assets/Images/arrow-down.png'

const Hero = () => {

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth'});
    };


  return (
    <div className='hero' id='hero'>
        <video className='hero-video' src={video} autoPlay muted loop></video>
      <div className="hero-text">
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'blue'}}/>
            <div className='hero-line'/>
        </div>
        <div>
        <div>
            <h1>Hi, I'm <span style={{color: 'blue'}}>Adebola</span></h1>
            <p>This is my official portfolio website to showcase my projects related to web development and UI/UX design</p>
        </div>
        </div>
      </div>
        <div className='hero-canvas'>
        <ComputerCanvas />
      </div>
      <div className='service-header'><button onClick={() => scrollToSection('service')}>Services i offer</button><img src={arrow} alt="" /></div>
    </div>
  )
}

export default Hero
