import React, { useContext, useEffect, useState } from 'react'
import './Style.css'
import NavBar from '../components/NavBar'
import MenuBox from '../components/MenuBox'
import { EmailContext } from '../Context/EmailProvider'
import SideBar from '../components/SideBar'
import { motion } from 'framer-motion'
import EarthCanvas from '../components/Earth'

const ContactPage = () => {

    const { sendEmail, form, error } = useContext(EmailContext)

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
		<h1>Contact</h1>
	  </motion.div>
      <motion.div className='contact-page'
      variants={contentVarient}
     initial="initial"
    animate={isLoaded ? "animate" : "initial"}
      >
            <SideBar/>
    <NavBar />
    <MenuBox />
            <div className="contact-info">
                <h1>CONTACT</h1>
                <p>Get in touch with me for any inquiries, collaborations, or just to say hello.</p>
                <p>You can also send me a direct message with the aid of the form below, and i'll get back to you as soon as i can. </p>
            </div>
            <div className="contacts">
        <div>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <h1>DIRECT MESSAGE</h1>
                <input type="text" name="name" placeholder="input your name..." />
                <br />
                <br />
                <input type="email" name="email" placeholder="input your email..." />
                <br />
                <br />
                <textarea id="message" type="text" placeholder="Send a message..." name="message"/>
                <br />
                {error && <div className='error-msg'>Failed to send message</div>}
                <button type="submit">Send</button>
            </form>
        </div>
        <div className='earth-ani'>
          <EarthCanvas />
        </div>  
    </div>
    </motion.div> 
    </div>
           

  )
}

export default ContactPage
