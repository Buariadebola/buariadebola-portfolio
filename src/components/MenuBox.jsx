import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import projects from '../assets/Images/projects.png'
import about from '../assets/Images/about.png'
import contact from '../assets/Images/contact-us.png'
import services from '../assets/Images/services.png'
import home from '../assets/Images/homeicon.png'
import { delay, motion } from 'framer-motion'

const variants = {
	open: {
		width: "100%",
		height: "100%",
		opacity: 1
	},
	closed: {
		width: 0,
		height: 0,
		opacity: 0
	}
}

const perspective = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: {delay: 1},
	},
	exit: {
		opacity: 0
	}
}

const MenuBox = () => {

  const [isActive, setIsActive] = useState(false);

  return (
      <div className="menu">
	<ul>
<li><button className="menu-button" onClick={() => {setIsActive(!isActive)}}>
	<motion.div
	className='menu-slider'
	animate={{top: isActive ? "-100%" : "0"}}
	transition={{duration: 0.5, ease: [0.75, 0, 0.24, 1]}}
	>
		<div className='menu-el'>
			<p>Menu</p>
		</div>
		<div className='menu-el'>
			<p>Close</p>
		</div>
	</motion.div>
	
</button>
		<motion.div
		className="dropdown"
			variants={variants}
			animate={isActive ? "open" : "closed"}
			initial="closed"
		>
			<motion.div
				variants={perspective}
				transition={{delay: 1}}
				animate="enter"
				exit="exit"
				initial="initial"
				className='dropdown-link'
			>
				<div><Link to="/"><img src={home} alt="" />Home</Link></div>
				<div><Link to="/Projects"><img src={projects} alt="" />projects</Link></div>
				<div><Link to="/about"><img src={about} alt="" />About</Link></div>
				<div><Link to="/contact"><img src={contact} alt="" />Contact</Link></div>
				<div><Link to="/services"><img src={services} alt="" />Services</Link></div>
			</motion.div>	
		</motion.div>
		
	</li>
	</ul>
</div>
  )
}

export default MenuBox
