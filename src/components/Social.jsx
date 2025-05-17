import React from 'react'
import '../App.css'
import insta from '../assets/Images/instagram-logo-icon-png.png'
import x from '../assets/Images/twitter2.png'
import facebook from '../assets/Images/facebook (2).png'
import logo from '../assets/Images/logo1.png'
import whatsapp from '../assets/Images/whatsapp (1).png'
import github from '../assets/Images/images (2).png'
import linkedin from '../assets/Images/linkedin.png'
import pinterest from '../assets/Images/pinterest.png'

const Social = () => {
  return (
    <div>
      <section id="social"><h1>My socials</h1>
	  <div className="social-content">
	  <div className="social-logo">
		<img src={logo} alt="" />
	  </div>
	<div className="socials">
		<div className="left">
		<p><img src={x} alt="" /><a href="https://x.com/AdebolaBua29879">X (Twitter)</a></p>
		<p><img src={insta} alt="" /><a href="https://www.instagram.com/buari_debola">Instagram</a></p>
		<p><img src={facebook} alt="" /><a href="https://www.facebook.com/profile.php?id=61573544115201">Facebook</a></p>
		</div>
		<div className="right">
		<p><img src={github} alt="" /><a href="https://github.com/Buariadebola/buariadebola-portfolio">Github</a></p>
		<p><img src={linkedin} alt="" /><a href="">LinkedIn</a></p>
		<p><img src={pinterest} alt="" /><a href="">Pinterest</a></p>
		<p><img src={whatsapp} alt="" /><a href="https://wa.me/qr/6SQDXLN6LZIPE1">Whatsapp</a></p>
		</div>
	</div>
	</div>
</section>
<footer>&copy; copyright 2025. All rights reserved</footer>
    </div>
  )
}

export default Social
