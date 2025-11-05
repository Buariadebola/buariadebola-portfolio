import { Html, useProgress } from '@react-three/drei';
import React from 'react'

const HeroLoader = () => {

  const { progress } = useProgress();
  return (
    <>
      <Html class="loader">
        <p style={{
        fontSize: 14,
        color: 'blue',
        fontWeight: 800,
        marginTop: 40
      }}>{progress.toFixed(2)}%</p>
      </Html>
    </>
  )
}

export default HeroLoader
