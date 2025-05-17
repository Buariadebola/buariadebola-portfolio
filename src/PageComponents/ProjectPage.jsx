import React from 'react'
import './Style.css'
import pga from '../assets/Images/progaming.png'
import ebook from '../assets/Images/ebook.png'
import barca from '../assets/Images/barca blog.png'
import NavBar from '../components/NavBar'
import MenuBox from '../components/MenuBox'

const ProjectPage = () => {
  return (
    <>
    <NavBar />
    <MenuBox />
    <div className="project-page">
    <div className="project-wrap">
      <img src={barca} alt="" />
      <div className="project-info">
      <h2>Barca Blog</h2>
			<hr />
			<p>Barca blog is a web app built to provide users with personalized updates, stats and insights on FC Barcelona. It features includes a home page with easy navigation, a "News and update" page which is dedicated to sharing breaking news, transfer rumors, injury updates, and exclusive interviews with players and coaches. It also includes a "Standings" page to Keep track of Barca's position in the league and other competitions, other page like statistics and fixture pages are also available</p>
			<hr />
			<p>React JS</p>
      </div>
    </div>
      <div className="project-wrap">
        <img src={ pga } />
        <div className="project-info">
            <h2>Game Registration website</h2>
            <hr />
            <p>This is a web-based registeration platform designed for gamers to sign up, form teams, and participate in competitions. The application features a responsive sidebar, a homepage, an about page, and a contact dropdown menu enabling users to communicate with administrators. Additionally, the platform includes data entry sections where users can input their information.</p>
            <hr/>
            <p>HTML, CSS, Javascript</p>
            </div>
      </div>
      <div className="project-wrap">
          <img src={ ebook } alt="project 2" />	
          <div className="project-info">				
                <h2>E-Library Website</h2>
                  <hr></hr>
                  <p>This is a digital library platform designed to catalog and provide access to a diverse collection of e-books across various genres. The platform boasts an intuitive users interface with seamless navigation, comprising a secure login page, a dynamic home page with easy navigation menus, and a footer section displaying contact information. Key features include a search bar, a genre-based filtering system, enabling users to discover books by category, and a blog webpage dedicated to sharing the latest news and updates from the world of digital publishing.</p>
                  <hr></hr>
                  <p>HTML, CSS, Javascript</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectPage
