import React, { useRef } from 'react'
import '../App.css'
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';


export default function Service() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    effect: ["start start", "end end"]
  })
  

    return (
    <>
    <div className="service" id='service' ref={container}>
        <Service1 scrollYProgress={scrollYProgress}/>
        <Service2 scrollYProgress={scrollYProgress}/>
        <Service3 scrollYProgress={scrollYProgress}/>
    </div>
    </>
  )
}

const Service1 = ({scrollYProgress}) => {

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -10])

  return (
    <div>
      <motion.div className='service-container' style={{scale, rotate}}>
        <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
        <h2>Web Development</h2>
        <h1>Develop custom web applications using latest technologies and frameworks.</h1>
        <p>Building robust, scalable and efficient web application that meets your business needs.</p>
      </motion.div>
    </div>
  )
}

const Service2 = ({scrollYProgress}) => {

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])

  return (
    <div>
      <motion.div className='service-container' style={{scale, rotate, backgroundColor: 'black', color: 'white'}}>
        <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
        <h2 style={{WebkitTextStroke: '1px white'}}>UI/UX design</h2>
        <h1>Designing and selling of user friendly and aesthetic User interface.</h1>
        <p>Crafting visually stunning and user friendly websites that captures your brand's essence.</p>
      </motion.div>
    </div>
  )
}

const Service3 = ({scrollYProgress}) => {

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])

  return (
    <div>
      <motion.div className='service-container' style={{scale, rotate}}>
        <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
        <h2>Framework Development and Sales</h2>
        <h1>Design and develop frameworks for specific programming languages.</h1>
        <p>Creating and selling reuseable frameworks to streamline development and improve efficiency.</p>
      </motion.div>
    </div>
  )
}
