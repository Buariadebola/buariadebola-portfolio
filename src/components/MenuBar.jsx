import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import projects from '../assets/Images/projects.png'
import about from '../assets/Images/about.png'
import contact from '../assets/Images/contact-us.png'
import services from '../assets/Images/services.png'
import logo from '../assets/Images/logo1.png'

const MenuBar = () => {

  
  const [theme, setTheme] = useState('dark');
  const [clicked, setClicked] = useState(false);
        
  useEffect (() => {
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
};

const handleColor = () => {
  setClicked(! clicked)
}

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth'});
    };

  return (
    <>
    {scrolled && (
        <NavBar /> )}
        {!scrolled && (
      <div className="menu-bar">
        <div className="menubar-logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-list">
          <ul>
            <li><Link to="/Projects"><img src={projects} alt="" /></Link><div className="description">Projects</div></li>
            <li><Link to="/about"><img src={about} alt="" /></Link><div className="description">About</div></li>
            <li><Link to="/contact"><img src={contact} alt="" /></Link><div className="description">Contact</div></li>
            <button onClick={() => scrollToSection('service')}><li><Link><img src={services} alt="" /></Link><div className="description">Services</div></li></button>
          </ul>
        </div>
        <div className={`theme-change ${theme}`}>
          <button className="toggle-button" onClick={toggleTheme} onMouseDown={handleColor} style={{backgroundColor: clicked ? 'white' : 'rgba(255, 255, 255, 0.51)'}}>
          <svg className="sun-icon">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          </button>
        </div>
      </div> )}
    </>
  )
}

export default MenuBar
