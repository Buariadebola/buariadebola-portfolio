import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Images/logo1.png'

const NavBar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth'});
    };

  return (
    <div>
        <nav className="nav-bar">
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/Projects"><li>Projects</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
              <button onClick={() => scrollToSection('service')}><Link to="/"><li>Services</li></Link></button>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
