import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Inner = ({children}) => {

    const [dimensions, setDimention] = useState({
        height: 0,
        width: 0
    })

    useEffect(() => {
        const resize = () => {
            setDimention({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        resize();

        window.addEventListener("resize", resize)
        return () => window.removeEventListener("resize", resize)
    }, [])
    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

  return (
    <div className='curve'>
        <div style={{opacity: dimensions.width > 0 ? 0 : 1}} className='background'></div>
        {/*{dimensions.width > 0 && <SVG {...dimensions}/>}*/}
      {children}
    </div>
  )
}

const SVG = ({width, height}) => {

    const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 300} 0 ${height + 300}
    l0 300
    `
    return(
        <svg>
            <path d={initialPath}></path>
        </svg>
    )
}

export default Inner
 