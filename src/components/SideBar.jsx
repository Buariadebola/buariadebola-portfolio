import React, { useContext } from 'react'
import MenuButton from './MenuButton'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeProvider'

const SideBar = () => {

    const { sidebar } = useContext(ThemeContext)

  return (
    <div className={`sidebar bgbar ${sidebar ? 'active' : ''}`}>
    <div className={`sidebar ${sidebar ? 'active' : ''}`}>
        <MenuButton/>
        <div className='sidebar-links'>
            <p>menu</p>
            <Link to="/">Home</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
        </div>
    </div>
    </div>
  )
}

export default SideBar
