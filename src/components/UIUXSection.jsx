import React from 'react'
import { UIproject } from './UIData'
import UIGallery from './UIGallery'
import { useSpring } from 'framer-motion'

const UIUXSection = () => {

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0)
  }

  const mouseMove = () => {
    const { clientX, clientY } = 0;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30)
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY)
  }
  return (
    <div className='uiux-section' onMouseMove={mouseMove}>
      {UIproject.map(({url, bgcolor}, i) => {
        return <UIGallery mousePosition={mousePosition} url={url} bgcolor={bgcolor} key={i}/>
      })}
      
    </div>
  )
}

export default UIUXSection
