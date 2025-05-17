import React from 'react'
import './Style.css'
import img from '../assets/Images/hey.jpg'
import NavBar from '../components/NavBar'
import MenuBox from '../components/MenuBox'

const AboutPage = () => {
  return (
    <>
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
				<p>Javascript</p>
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
				<p>NEXT JS</p>
			</li>
		</ul>
	</div>
	<div id="intro">
		<h2>Qualifications</h2>
		<ul>
			<li>
				<h4>National Deploma (ND)</h4>
				<p1>-----</p1>
			</li>
			<li><h4>Bachelor of Science (BSc)</h4>
				<p1>-----</p1>
			</li>
			<li>
				<p>Currently a ND student (computer science)</p>
			</li>
		</ul>
	</div>
</div>
<div className="download-cv">
<h5>DOWNLOAD MY CV</h5>
<a href="debola's CV.docx" download="debola's CV.docx" id="download"><button className="download-button">DOWNLOAD</button></a>
</div>
    </>
  )
}

export default AboutPage
