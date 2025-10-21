import React from 'react'
import '../App.css'
import insta from '../assets/Images/instagram.png'
import x from '../assets/Images/x.png'
import facebook from '../assets/Images/facebook icon.png'
import logo from '/renova logo.png'
import whatsapp from '../assets/Images/whatsapp (1).png'
import github from '../assets/Images/images (2).png'
import linkedin from '../assets/Images/linkedin.png'
import pinterest from '../assets/Images/pinterest.png'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <div>
      <section className='social' style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
		<div id="social">
		<div className="social-content">
		<div className="social-logo">
			<img src={logo} alt="" />
		</div>
		<div className="mid-footer">
			<div className='footer-links'>
				<h2>Quick links</h2>
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/services">Services</Link>
			</div>
			<div className="my-info" style={{color: 'white'}}>
				<h2>Contact info</h2>
				<p>+234 913 621 7111</p>
				<p>buariadebolagmail.com</p>
				<p>Gbagada phase 2, Lagos</p>
			</div>
			
		</div>
		<div className="socials">
			<p><img src={x} alt="" /><a href="https://x.com/AdebolaBua29879">X (Twitter)</a></p>
			<p><img src={insta} alt="" /><a href="https://www.instagram.com/buari_debola">Instagram</a></p>
			<p><img src={facebook} alt="" /><a href="https://www.facebook.com/profile.php?id=61573544115201">Facebook</a></p>
			<p><img src={github} alt="" /><a href="https://github.com/Buariadebola/buariadebola-portfolio">Github</a></p>
			<p><img src={linkedin} alt="" /><a href="">LinkedIn</a></p>
			<p><img src={pinterest} alt="" /><a href="">Pinterest</a></p>
			<p><img src={whatsapp} alt="" /><a href="https://wa.me/qr/6SQDXLN6LZIPE1">Whatsapp</a></p>
		</div>
		</div>
		<footer>&copy; copyright 2025. All rights reserved</footer>
		</div>

</section>

    </div>
  )
}

export default Social
