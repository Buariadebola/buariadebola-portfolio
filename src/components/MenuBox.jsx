import React, {useState, useEffect} from 'react'
import img from '../assets/Images/menu1.png'
import { Link } from 'react-router-dom'

const MenuBox = () => {
	const [dropdownMenu, setDropdownMenu] = useState(false);

	const handleDropdown = () => {
		setDropdownMenu(! dropdownMenu);
	}

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

  const scrollToSection = (id) => {
	const section = document.getElementById(id);
	section.scrollIntoView({ behavior: 'smooth'});
  };

  return (
      <div className="menu">
	<ul>
<li><button className="menu-button" onClick={handleDropdown}><img src={ img } /></button>
		<ul className={ `dropdown ${dropdownMenu ? 'show' : 'hide'}`}>
			<Link to="/"><li>Home</li></Link>
			<hr></hr>
			<Link to="/Projects"><li>projects</li></Link>
			<hr></hr>
			<Link to="/about"><li>About</li></Link>
			<hr></hr>
			<Link to="/contact"><li>Contact</li></Link>
			<hr></hr>
			<Link to="/"><button onClick={() => scrollToSection('service')}><li>Services</li></button></Link>
			<hr />
			<div className={`theme-change ${theme}`}>
          <button className="toggle-button" onClick={toggleTheme} onMouseDown={handleColor} style={{backgroundColor: clicked ? 'white' : 'rgba(255, 255, 255, 0.51)'}}>
          <svg className="sun-icon">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          </button>
        </div>
		</ul>
	</li>
	</ul>
</div>
  )
}

export default MenuBox
