import React, { useEffect, useState } from 'react'
import './Style.css'
import NavBar from '../components/NavBar'
import MenuBox from '../components/MenuBox'
import SideBar from '../components/SideBar'
import ReactSection from '../components/ReactSection'
import UIUXSection from '../components/UIUXSection'
import OthersSection from '../components/OthersSection'
import SectionButton from '../components/SectionButton'
import { motion } from 'framer-motion'

const ProjectPage = () => {

  const [ activePage, setActivePage ] = useState('react-section');

  const handleActivePage = (page) => {
    setActivePage(page)
  }

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
        <h1>projects</h1>
        </motion.div>
    <motion.div className="project-page"
    variants={contentVarient}
     initial="initial"
    animate={isLoaded ? "animate" : "initial"}
    >
      <SideBar/>
    <NavBar />
    <MenuBox />
    <SectionButton handleActivePage={handleActivePage} activePage={activePage}/>
    <div className='projectpage-content'>
      {activePage === 'react-section' && <ReactSection/>}
      {activePage === 'uiux-section' && <UIUXSection/>}
      {activePage === 'others-section' && <OthersSection/>}
    </div>
    </motion.div>
    </div>

  )
}

export default ProjectPage
