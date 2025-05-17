import '../App.css';
import { Link } from 'react-router-dom'
import background from '../assets/Images/—Pngtree—blue abstract background free png_1451506.png'
import github from '../assets/Images/images (2).png'
import whatsapp from '../assets/Images/whatsapp.png'
import instagram from '../assets/Images/instagram-logo-icon-png.png'

const Header = () => {
    return (
    <div className="head-section" id='head-section'>
				<img src={background} alt="" />
		<section className="header">
		<div className="head-logo">
			<h1>R<span>enova</span> C<span>odes</span></h1>
		</div>
    		<h1 id="welcome">Welcome to my portfolio</h1>
			<div id="home">
				<h1>Hi, I'm Adebola </h1>
				<p>This is my official portfolio website to showcase my projects related to web design and UI/UX design</p>
				<Link to="/about"><button>More About Me</button></Link>
				<div className="home-links">
					<a href="https://wa.me/qr/6SQDXLN6LZIPE1"><img src={whatsapp} alt="" /></a>
					<a href="https://github.com/Buariadebola/buariadebola-portfolio"><img src={github} alt="" /></a>
					<a href="https://www.instagram.com/buari_debola"><img src={instagram} alt="" /></a>
				</div>
			</div>
		</section>
    </div>
    )
}

export default Header