import React from 'react'
import { motion } from 'framer-motion';

const UIGallery = ({url, bgcolor, mousePosition}) => {

    const { x, y } = mousePosition;

  return (
    <motion.div className="ui-gallery" style={{backgroundColor: bgcolor}}>
        <motion.div className='vignette' style={{position: x, y}}>
            <img src={url} alt="" />
        </motion.div>
        
    </motion.div>
  )
}

export default UIGallery
