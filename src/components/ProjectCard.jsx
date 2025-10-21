import React, { useEffect, useRef } from 'react'

const ProjectCard = (props) => {

            const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        } else {
          ref.current.classList.remove("visible");
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
              <div className="project" ref={ref}>
                <img src={props.img} alt="" />
                <h2>{props.header}</h2>
                <p>{props.about}</p>
                <p>{props.lang}</p>
            </div>
    </>
  )
}

export default ProjectCard
