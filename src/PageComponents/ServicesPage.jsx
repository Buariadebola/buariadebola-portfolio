import React, { useEffect, useState } from 'react'
import '../App.css'
import webdev from '../assets/Images/web dev.jpeg'
import UI from '../assets/Images/UI designing.png'
import framework from '../assets/Images/full-stack-web-developers.png'
import NavBar from '../components/NavBar'
import MenuBox from '../components/MenuBox'
import ServiceCard from '../components/ServiceCard'
import SideBar from '../components/SideBar'
import { motion } from 'framer-motion'

const services = [
  {image: webdev, header: "Web Development", text: "Building robust, scalable and efficient web application that meets your business needs.", textB: "Develop custom web applications using latest technologies and frameworks.", bgColor: 'rgb(0, 102, 255)'},
  {image: UI, header: "UI/UX design", text: "Crafting visually stunning and user friendly websites that captures your brand's essence.", textB: "Designing and selling of user friendly and aesthetic User interface.", bgColor: 'rgb(121, 121, 121)'},
  {image: framework, header: 'Framework Development and Sales', text: 'Creating and selling reuseable frameworks to streamline development and improve efficiency.', textB: 'Design and develop frameworks for specific programming languages.', bgColor: 'rgb(255, 149, 0)'}
]

const ServicesPage = () => {

  
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
          <h1>Services</h1>
        </motion.div>
          <motion.div className="service-page" id='service'
           variants={contentVarient}
     initial="initial"
    animate={isLoaded ? "animate" : "initial"}
          >
                <SideBar/>
    <NavBar/>
    <MenuBox/>
        <div className='service-content'>
          {services.map((service, index) => (
            <div className="card-container">
              <ServiceCard
              key={index}
                image={service.image}
                header={service.header}
                text={service.text}
                textB={service.textB}
                bgColor={service.bgColor}
                container={service.container}
                i={index}
              />
              </div>
          ))}
        </div>
          </motion.div>
    </div>
  )
}

export default ServicesPage
