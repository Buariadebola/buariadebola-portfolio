import React, { useState, useEffect } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import webdev from '../assets/Images/web dev.jpeg'
import UI from '../assets/Images/UI designing.png'
import framework from '../assets/Images/full-stack-web-developers.png'

const Service = () => {

    const [fadeSlide, setFadeSlide] = useState(false);

    const handleSlide = () => {
      const slideTop = document.querySelector('.service-content').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (slideTop < windowHeight * 0.8) {
        setFadeSlide(true);
    } else{
      setFadeSlide(false);
    }
    }

      useEffect(() => {
        window.addEventListener('scroll', handleSlide);
        return () => window.removeEventListener('scroll', handleSlide)
      }, []);


    return (
    <>
    <div className="service" id='service'>
        <h1>Services i offer</h1>
      <div className={`service-content ${fadeSlide ? 'active' : ''}`}>
        <img src={webdev} alt="" />
          <div className="service-info">
            <h2>Web Development</h2>
            <p>Building robust, scalable and efficient web application that meets your business needs.</p>
            <p>Develop custom web applications using latest technologies and frameworks.</p>
          </div>
          </div>
          <div className={`service-content ${fadeSlide ? 'active' : ''}`}>
          <div className="service-info">
            <h2>UI/UX design</h2>
            <p>Crafting visually stunning and user friendly websites that captures your brand's essence.</p>
            <p>Designing and selling of user friendly and aestetic User interface.</p>
          </div>
          <img src={UI} alt="" />
          </div>
          <div className={`service-content ${fadeSlide ? 'active' : ''}`}>
          <img src={framework} alt="" />
          <div className="service-info">
            <h2>Framework Development and Sales</h2>
            <p>Creating and selling reuseable frameworks to streamline development and improve efficiency.</p>
            <p>Design and develop frameworks for specific programming languages.</p>
          </div>
      </div>
      <Link to="/contact"><button className="contact-button">CONTACT ME</button></Link>
    </div>
    <hr className="page-divide" />
    </>
  )
}

export default Service
