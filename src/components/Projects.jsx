import React, { useEffect, useRef } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { projects } from './ProjectData'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Projects = () => {

  const imgRefs = useRef([]);
  const pRefs = useRef([]);

useEffect(() => {
  const callback = (entries) => {
    entries.forEach(entry => {
      if (!entry.target) return;
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };
  const observer = new window.IntersectionObserver(callback, { threshold: 0.2 });

  imgRefs.current.forEach(ref => ref && observer.observe(ref));
  pRefs.current.forEach(ref => ref && observer.observe(ref));

  return () => observer.disconnect();
}, []);

  return (
    <section className="project">
      <h1>Recent Projects</h1>
      <div className="project-content">
        <div className="project-left">
          {projects.map((project, i) => (
			<div className='project-image' key={i} ref={el => imgRefs.current[i] = el}>
            <img
			className='project-design'
              
              src={project.image}
              alt=""
              
            />
			</div>
          ))}
        </div>
        <div className="project-right">
            {projects.map((project, i) => (
          <div className="project-text"
              key={i}
              ref={el => pRefs.current[i] = el}
          >
            <h2 style={{color: 'white'}}>
              {project.title}
            </h2>
            <p style={{color: 'white'}}><span>Description: </span>
              {project.description}
            </p>
            <p style={{color: 'white'}}><span>Dev-tools: </span>
              {project.devtools}
            </p>
          </div>
          ))}
      </div>
	  </div>
      <button className="view-more">
        <Link to="/Projects">View More</Link>
      </button>
    </section>
  )
}

export default Projects
