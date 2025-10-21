import { useEffect, useRef } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import background from '../assets/Images/—Pngtree—blue abstract background free png_1451506.png'
import github from '../assets/Images/images (2).png'
import whatsapp from '../assets/Images/whatsapp.png'
import instagram from '../assets/Images/instagram-logo-icon-png.png'


const Header = () => {

	  const backgroundImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeOutStartPoint = 50;
      const fadeOutEndPoint = 400;

      if (backgroundImageRef.current) {
        if (scrollPosition >= fadeOutStartPoint && scrollPosition <= fadeOutEndPoint) {
          const opacity = 1 - (scrollPosition - fadeOutStartPoint) / (fadeOutEndPoint - fadeOutStartPoint);
          backgroundImageRef.current.style.opacity = opacity.toString();
        } else if (scrollPosition > fadeOutEndPoint) {
          backgroundImageRef.current.style.opacity = '0';
        } else {
          backgroundImageRef.current.style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
    <div className="head-section" id='head-section'>
				<img ref={backgroundImageRef} src={background} alt="" />
		<section className="header">
		<div className="head-logo">
			<h1>R<span>enova</span> C<span>odes</span></h1>
		</div>
    		<h1 id="welcome">Welcome to my portfolio</h1>
			<div id="home">
				<h1>Hi, I'm Adebola </h1>
				<p>This is my official portfolio website to showcase my projects related to web development and UI/UX design</p>
				<Link to="/about"><button>More About Me</button></Link>
				<div className="home-links">
					<a href="https://wa.me/qr/6SQDXLN6LZIPE1"><img src={whatsapp} alt="" /></a>
					<a href="https://github.com/Buariadebola/"><img src={github} alt="" /></a>
					<a href="https://www.instagram.com/buari_debola"><img src={instagram} alt="" /></a>
				</div>
			</div>
		</section>
    </div>
    )
}

export default Header