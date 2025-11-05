import React from 'react'
import RenovaAI from '../assets/Images/renova image.png'
import barca from '../assets/Images/barca blog.png'
import ebook from '../assets/Images/ebook web.png'
import TBB from '../assets/Images/TBB image.png'
import newspulse from '../assets/Images/news pulse image.png'

const ReactSection = () => {
  return (
    <>
                <div className="project-wrap">
            <img src={newspulse} alt="" />
            <div className="project-info">
            <h2>News Pulse by Renova</h2>
                <p>News Pulse is a modern news aggregation platform that delivers timely, reliable, and engaging stories from across the globe. The website features a sleek and contemporary layout, with a clean homepage that highlights trending headlines and categories in a visually compelling way. Users can seamlessly browse through various news sections, from technology and entertainment to politics and global affairs.</p>
                <p>React JS</p>
            <a href="https://github.com/Buariadebola/news-pulse"><button className='respository-btn'>View Respository</button></a>
            <a href="https://newspulse-by-renova.vercel.app/"><button className='website-btn'>Visit Website</button></a>
            </div>
          </div>
          <div className="project-wrap">
            <img src={RenovaAI} alt="" />
            <div className="project-info">
            <h2>Renova AI</h2>
                <p>Renova AI is a Chatbot platform that empowers individuals and businesses to leverage the latest advancements in artificial intelligence. The website boasts a sleek and modern design, featuring a visually appealing homepage that effectively communicates some of the platform purpose and functionality, a chat interface that incorporates seamless animations, providing a dynamic and engaging user experience.</p>
                <p>React JS</p>
            <a href=""><button className='respository-btn'>View Respository</button></a>
            <a href="https://renova-ai-chatbot.vercel.app/"><button className='website-btn'>Visit Website</button></a>
            </div>
            </div>
            <div className="project-wrap">
            <img src={TBB} alt="" />
            <div className="project-info">
            <h2>The Buari Blog</h2>
                <p>The Buari Blog is a web-application designed to deliver real-time news updates to users. Some of it's features include a homepage that showcases concise highlights and article summaries, a news page with filtering capabilities by category, allowing users to efficiently browse and discover relevant content, a chatbot is provided to help users get more insights on new discoveries and so on.</p>
                <p>React JS</p>
            <a href="https://github.com/Buariadebola/The-buari-blog"><button className='respository-btn'>View Respository</button></a>
            <a href="https://the-buari-blog.vercel.app/"><button className='website-btn'>Visit Website</button></a>
            </div>
          </div>
          <div className="project-wrap">
            <img src={barca} alt="" />
            <div className="project-info">
            <h2>Barca Blog</h2>
                <p>Barca blog is a web app built to provide users with personalized updates, stats and insights on FC Barcelona. It features includes a home page with easy navigation, a "News and update" page which is dedicated to sharing breaking news, transfer rumors, injury updates, and exclusive interviews with players and coaches. It also includes a "Standings" page to Keep track of Barca's position in the league and other competitions, other page like statistics and fixture pages are also available.</p>
                <p>React JS</p>
            </div>
          </div>
            <div className="project-wrap">
                <img src={ebook} alt="" />
                <div className="project-info">				
                      <h2>E-Library Website</h2>
                        <p>This is a digital library platform designed to catalog and provide access to a diverse collection of e-books across various genres. The platform boasts an intuitive users interface with seamless navigation, comprising a secure login page, a dynamic home page with easy navigation menus, and a footer section displaying contact information. Key features include a search bar, a genre-based filtering system, enabling users to discover books by category, and a blog webpage dedicated to sharing the latest news and updates from the world of digital publishing.</p>
                        <p>React JS</p>
                  </div>
              </div>
    </>
  )
}

export default ReactSection
