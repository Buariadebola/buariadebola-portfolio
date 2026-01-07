import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Magnetic = ({children}) => {

    const ref = useRef(null);

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 700};
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

      const mouseMove = (e) => {
        if (!ref.current) return;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        const maxDistance = 100;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
        const pull = Math.max(0, 1 - distance / maxDistance);

        mouseX.set(distanceX * pull)
        mouseY.set(distanceY * pull)
      }

      const mouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
      }

    
  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      transition={{type: "spring", stiffness: 150}}
    >
        {children}
    </motion.div>
  )
}

export default Magnetic
