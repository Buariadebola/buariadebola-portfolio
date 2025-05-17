import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import pga from '../assets/Images/progaming.png'
import barca from '../assets/Images/barca blog.png'

const Projects = () => {
  return (
	<>
    <section className="my-project">
			<h1 className="project-header">My recent projects</h1>
		<div id="projects">
		<div className="project">
			<img src={barca} alt="" />
			<h2>Barca Blog</h2>
			<hr />
			<p>Barca blog is a web app built to provide users with personalized updates, stats and insights on FC Barcelona. It features includes a home page with easy navigation, a "News and update" page which is dedicated to sharing breaking news, transfer rumors, injury updates, and exclusive interviews with players and coaches. It also includes a "Standings" page to Keep track of Barca's position in the league and other competitions, other page like statistics and fixture pages are also available</p>
			<hr />
			<p>React JS</p>
		</div>
			<div className="project">
				<img src={ pga } />
				<h2>Game Registration website</h2>
				<hr></hr>
				<p>This is a web-based registeration platform designed for gamers to sign up, form teams, and participate in competitions. The application features a responsive sidebar, a homepage, an about page, and a contact dropdown menu enabling users to communicate with administrators. Additionally, the platform includes data entry sections where users can input their information.</p>
				<hr></hr>
				<p>HTML, CSS, Javascript</p>
			</div>
			</div>
			<button className="view-more"><Link to="/Projects">View More</Link></button>
		</section>
		<hr className="page-divide" />
		</>
  )
}

export default Projects
