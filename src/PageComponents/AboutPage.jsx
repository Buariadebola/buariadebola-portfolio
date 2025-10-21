import React, { useEffect, useState } from 'react'
import './Style.css'
import img from '../assets/Images/my image.png'
import NavBar from '../components/NavBar'
import MenuBox from '../components/MenuBox'
import icon from '../assets/Images/download.png'
import SideBar from '../components/SideBar'
import { motion } from 'framer-motion'

const AboutPage = () => {

	  const [isLoaded, setIsLoaded] = useState(false);
	
	  useEffect(() => {
		setIsLoaded(true);
	  }, []);
	
	   const backgroundVariants = {
		initial: { x: 0 },
		animate: {
		  x: '-100vw',
		  transition: {
			duration: 1,
			ease: 'easeInOut'
		  }
		}
	   };
	
	   const contentVarient = {
		initial: { x: '100vw' },
		animate: {
		  x: 0,
		  transition: {
			duration: 1,
			ease: 'easeInOut'
		  }
		}
	   }


  return (
	<div style={{position: 'relative', overflow: 'hidden'}}>
			<motion.div className='mask-animation'
	   variants={backgroundVariants}
	   initial="initial"
	   animate={isLoaded ? "animate" : "initial"}
	  >
		<h1>About</h1>
	  </motion.div>
	<motion.div className='about-page' 
	 variants={contentVarient}
     initial="initial"
    animate={isLoaded ? "animate" : "initial"}
	>
	<SideBar/>
	<NavBar />
	<MenuBox />
    <div id='about'>
		<img src={img} alt="" />
		<div className="about-info">
            <h1>About me</h1>
	        <p>Hi, i'm Adebola, a passionate web designer dedicated to crafting exceptional digital experience. With a keen eye for detail and love for innovation, i help businesses and individuals bring their online presence to life. My goal is to deliver tailored solution to meet the unique needs of each client </p>
	        <p>Contact me now and let's get your website done!</p>
		</div>
    </div>
    <div className="intro-wrapper">
	<div id="intro">
		<h2>My Technical Expertise</h2>
		<ul>
			<li>
				<p>HTML, CSS & Javascript</p>
			</li>
			<li>
				<p>Tailwind CSS</p>
			</li>
			<li>
				<p>UI/UX design (Figma)</p>
			</li>
			<li>
				<p>React JS</p>
			</li>
			<li>
				<p>Next JS</p>
			</li>
			<li>
				<p>Express JS</p>
			</li>
		</ul>
	</div>
	<div id="intro">
		<h2>Qualifications</h2>
		<ul>
			<li>
				<h4>National Deploma (ND)</h4>
				<p>-----</p>
			</li>
			<li><h4>Bachelor of Science (BSc)</h4>
				<p>-----</p>
			</li>
			<li>
				<p>Currently a ND student (computer science)</p>
			</li>
		</ul>
	</div>
</div>
<div className="download-cv">
<h5>DOWNLOAD MY CV</h5>
<a id='download'><button className="download-button">DOWNLOAD <img src={icon} alt="" /></button></a>
</div>
</motion.div>
	</div>


  )
}

export default AboutPage
