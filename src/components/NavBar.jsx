import React, { useEffect, useState } from 'react'
import '../App.css'
import logo from '/renova logo.png'
import MenuButton from './MenuButton'

const NavBar = () => {

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


  return (
    <div>
        <nav className={`nav-bar ${scrolled ? 'colored' : ''}`}>
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <MenuButton/>
        </nav>
    </div>
  )
}

export default NavBar
