import React from 'react'
import '../App.css'
import img from '../assets/Images/down.png'

const PageUp = () => {


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth'});
    };

  return (
<button className="page-up" onClick={() => scrollToSection('hero')}>
    <img src={ img } />
</button>
  )
}

export default PageUp
