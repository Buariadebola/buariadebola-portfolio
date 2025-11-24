import React from 'react'
import { motion } from 'framer-motion';

const UIGallery = ({url, img, bgcolor, mousePosition}) => {

    const { x, y } = mousePosition;

  return (
    <motion.div className="ui-gallery" style={{backgroundColor: bgcolor}}>
        <motion.div className='vignette' style={{position: x, y}}>
          <a href={ img }>
            <img src={url} alt="" />
          </a>
            
        </motion.div>
        
    </motion.div>
  )
}

export default UIGallery
